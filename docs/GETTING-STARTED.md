# Getting started

## Requirements
- Node.js 20 or newer
- npm
- FFmpeg is optional but useful for media conversion

## Create a video project

From the repository root:

```bash
npm install
npm run doctor
npm run create -- --name product-intro --template explainer
cd projects/product-intro
npm install
npm run studio
```

Remotion Studio opens a local preview. Render the sample composition with:

```bash
npm run render
```

The output is written to `projects/product-intro/out/video.mp4`.

## Work with Claude Code

Open Claude Code from the repository root. The `.claude/commands/` directory includes `/setup`, `/video`, `/plan`, `/script`, `/storyboard`, `/brand`, `/design`, and `/scene-review`. The commands guide the creative workflow; they do not silently call paid AI services.

## Current scope

The included explainer is a working Remotion starter composition. Voiceover, image generation, music generation, screen recording, and social publishing are extension points, not built-in automated services yet.
