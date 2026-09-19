/**
 * Automated Verification Test for web-component-scanner (Zero-List Dynamic Engine)
 * Tests dynamic extraction of packages from:
 * 1. Source maps (.map)
 * 2. Companion license manifests (.LICENSE.txt)
 * 3. Live server probe & Stdin mode
 */

const http = require('node:http');
const assert = require('node:assert');
const {
  scanTarget,
  extractScriptUrls,
  extractNodeModulesFromSourceMap,
  extractPackagesFromLicenseText
} = require('../scripts/scan-webpage.js');

async function runTests() {
  console.log('🧪 Starting web-component-scanner dynamic verification tests...\n');

  // 1. Dynamic Source Map Test
  console.log('Test 1: Dynamic Source Map Extraction (Zero-List)...');
  const mockSourceMap = {
    version: 3,
    sources: [
      'webpack:///node_modules/@radix-ui/react-dialog/dist/index.mjs',
      'webpack:///node_modules/lucide-react/dist/esm/icons/check.js',
      'webpack:///node_modules/zustand/esm/index.mjs',
      'webpack:///node_modules/zod/lib/index.mjs',
      'webpack:///node_modules/@tanstack/react-query/build/lib/index.mjs',
      'webpack:///src/components/Modal.tsx'
    ]
  };
  const extractedPkgs = extractNodeModulesFromSourceMap(mockSourceMap);
  assert.ok(extractedPkgs.includes('@radix-ui/react-dialog'), 'Detects @radix-ui/react-dialog');
  assert.ok(extractedPkgs.includes('lucide-react'), 'Detects lucide-react');
  assert.ok(extractedPkgs.includes('zustand'), 'Detects zustand');
  assert.ok(extractedPkgs.includes('zod'), 'Detects zod');
  assert.ok(extractedPkgs.includes('@tanstack/react-query'), 'Detects @tanstack/react-query');
  assert.strictEqual(extractedPkgs.includes('Modal.tsx'), false, 'Ignores app source files');
  console.log('  ✅ Extracted any arbitrary package dynamically without lists.\n');

  // 2. Dynamic License Manifest (.LICENSE.txt) Test
  console.log('Test 2: Dynamic License Manifest Extraction...');
  const mockLicenseText = `
    /**
     * @license React
     * react.production.min.js
     */
    /**
     * @license
     * Lodash <https://lodash.com/>
     * Copyright OpenJS Foundation
     */
    /*!
     * axios v1.6.0
     * (c) 2023 Matt Zabriskie
     */
    /**
     * Package: framer-motion
     * Version: 10.16.4
     */
  `;
  const licPkgs = extractPackagesFromLicenseText(mockLicenseText);
  assert.ok(licPkgs.some(p => p.toLowerCase().includes('react')), 'Detects React from license');
  assert.ok(licPkgs.some(p => p.toLowerCase().includes('lodash')), 'Detects Lodash from license');
  assert.ok(licPkgs.some(p => p.toLowerCase().includes('axios')), 'Detects Axios from license');
  assert.ok(licPkgs.some(p => p.toLowerCase().includes('framer-motion')), 'Detects Framer Motion from license');
  console.log('  ✅ Extracted packages dynamically from license files.\n');

  // 3. Script URL Extractor
  console.log('Test 3: Script URL Extractor...');
  const mockHtml = `
    <html>
      <head>
        <script src="/_next/static/chunks/main.js"></script>
        <script src="https://cdn.example.com/bundle.js"></script>
      </head>
    </html>
  `;
  const urls = extractScriptUrls(mockHtml, 'https://my-app.test');
  assert.strictEqual(urls.length, 2);
  console.log('  ✅ Script URLs extracted.\n');

  // 4. Live Server Test with Companion .LICENSE.txt and .map
  console.log('Test 4: Live Server Probe with .map and .LICENSE.txt...');
  const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html>
          <head>
            <script id="__NEXT_DATA__" type="application/json">{"props":{}}</script>
            <script src="/bundle.js"></script>
          </head>
          <body>
            <div id="__next">
              <div class="flex items-center justify-between p-4">
                <button data-radix-collection-item data-state="open">Click</button>
              </div>
            </div>
          </body>
        </html>
      `);
    } else if (req.url === '/bundle.js') {
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      res.end(`
        // Compiled bundle
        /*! For license information please see bundle.js.LICENSE.txt */
        //# sourceMappingURL=/bundle.js.map
      `);
    } else if (req.url === '/bundle.js.LICENSE.txt') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`
        /**
         * @license
         * Package: clsx
         * Version: 2.1.0
         */
      `);
    } else if (req.url === '/bundle.js.map') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        version: 3,
        sources: [
          'node_modules/react/index.js',
          'node_modules/next/dist/client/index.js',
          'node_modules/recharts/es6/index.js'
        ]
      }));
    } else {
      res.writeHead(404);
      res.end();
    }
  });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const targetUrl = `http://127.0.0.1:${port}/`;

  try {
    const scanResult = await scanTarget(targetUrl);
    const names = scanResult.detectedPackages.map(p => p.name);
    console.log('  Live detected packages:', names);

    assert.ok(names.includes('next'), 'Detects Next.js');
    assert.ok(names.includes('react'), 'Detects React');
    assert.ok(names.includes('recharts'), 'Detects recharts dynamically from source map');
    assert.ok(names.includes('clsx'), 'Detects clsx dynamically from .LICENSE.txt');
    assert.ok(names.includes('tailwindcss'), 'Detects Tailwind CSS');
    assert.strictEqual(scanResult.sourceMapsFound, true);

    console.log('  ✅ Live probe passed successfully!\n');
  } finally {
    server.close();
  }

  // 5. Stdin / Pre-fetched HTML Test
  console.log('Test 5: Stdin / Pre-fetched HTML...');
  const stdinHtml = '<div id="__next" class="grid grid-cols-2"><button data-radix-collection-item>Radix</button></div>';
  const stdinResult = await scanTarget('https://sample.test', { html: stdinHtml });
  const stdinNames = stdinResult.detectedPackages.map(p => p.name);
  assert.ok(stdinNames.includes('next'));
  assert.ok(stdinNames.includes('tailwindcss'));
  assert.ok(stdinNames.includes('@radix-ui/react-primitive'));
  console.log('  ✅ Stdin / pre-fetched HTML test passed.\n');

  console.log('🎉 ALL DYNAMIC TESTS PASSED! ZERO HARDCODED LISTS REQUIRED.\n');
}

runTests().catch((err) => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
