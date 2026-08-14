# Model Configurations & Profiles

This directory stores reusable model configurations, parameter profiles (temperature, top_p, max_tokens), system prompts, and local model definitions across different LLM providers.

---

## 📂 Supported Providers

| Provider | Folder | Highlights |
| :--- | :--- | :--- |
| **Google Gemini** | [`gemini/`](./gemini) | Long context window, multimodal capabilities, fast tool calling |
| **Anthropic Claude** | [`anthropic/`](./anthropic) | High-fidelity coding, nuanced reasoning, extended thinking |
| **OpenAI** | [`openai/`](./openai) | Structured outputs, function calling, reasoning models |
| **Ollama / Local** | [`ollama/`](./ollama) | Offline inference, open-weight models (Llama 3, Qwen, DeepSeek) |

---

## ⚙️ Configuration Schema

Each provider folder contains:
- `config.json`: Default model parameters, tool settings, and timeout thresholds.
- `system-prompt.md`: Base system instructions tailored for the provider's strengths.
