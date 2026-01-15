# Feature Show Context In Cli

Output log of the context window (including llm output) starting with initial
**System Prompt** up to the last **User Prompt**.

1. Toggles a box similar to the Debug box (F12)
2. Toggle key: ctrl-O

# History

Inspired by work done quite a while back by Prashanth Subrahmanyam in his
gemini-cli repo
(https://github.com/ksprashu/gemini-cli/tree/feature/show-context-shortcut) and
his article on Gemini-Cli context
(https://medium.com/google-cloud/advanced-gemini-cli-part-2-decoding-the-context-edc9e815b548)

# Outputs json

1. **System Prompt**
2. **Gemini-Cli Setup:** Detail about the project fs, and overall machine
   environment
3. **User Prompts and LLM response**

## Notes

1. **GEMINI.md:** These files are concatenated and included within the **System
   Prompt** section of the output.
