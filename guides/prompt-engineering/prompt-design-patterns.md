# Prompt Design Patterns & Best Practices

A reference guide for designing high-performance prompts across frontier LLMs (Gemini, Claude, GPT, Local/Ollama models).

---

## 🎯 Core Principles

1. **Be Explicit and Unambiguous**: State constraints clearly (e.g., "Output exclusively valid JSON. Do not include markdown code fences or conversational text.").
2. **Use Delimiters**: Separate context, instructions, and input data using XML tags, markdown headers, or clear delimiters (`<context>`, `### Input`).
3. **Specify the Output Format**: Provide a schema or explicit template of the expected response.
4. **Give the Model Space to Think**: Request chain-of-thought (`<thinking>` tags or step-by-step reasoning) before the final answer.

---

## 🧩 Standard Prompt Template Architecture

```markdown
<system_identity>
You are an expert software engineer specializing in [domain].
</system_identity>

<context>
[Background information, project constraints, dependencies]
</context>

<instructions>
1. Analyze the input problem.
2. Formulate an execution strategy.
3. Output the solution following the format below.
</instructions>

<constraints>
- Do not use deprecated APIs.
- Ensure strict type safety.
- Handle error boundaries gracefully.
</constraints>

<output_format>
```json
{
  "status": "success",
  "data": { ... }
}
```
</output_format>

<input>
{{USER_INPUT}}
</input>
```

---

## 🛠️ Prompting Strategies

### 1. Zero-Shot vs Few-Shot
- **Zero-shot**: Directly prompt the model with instructions. Ideal for standard reasoning or knowledge retrieval.
- **Few-shot**: Provide 2-3 positive examples of inputs and target outputs to establish style, format, and edge-case handling.

### 2. Role-Prompting
Condition the model with relevant persona traits (e.g., "Senior Security Auditor", "Systems Architect") to bias vocabulary, rigor, and depth of analysis.

### 3. Progressive Refinement
Break complex tasks into sequential prompts (e.g., Step 1: Extract requirements → Step 2: Generate draft → Step 3: Critique & refine).
