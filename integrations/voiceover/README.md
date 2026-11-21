# Voiceover adapters

The core toolkit intentionally does not require a paid speech provider.

To add one, implement an adapter that accepts:
- `text`: narration text
- `outputPath`: destination audio file
- `voice`: provider-specific voice identifier

Return the generated file path and provider metadata. Keep API keys in environment variables and never commit them.
