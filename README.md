# Videogen

An AI-assisted video production workspace for planning, scripting, storyboarding, designing, previewing, and rendering videos. It is an independent implementation inspired by the workflow and project structure of [Digital Samba's Claude Code Video Toolkit](https://github.com/digitalsamba/claude-code-video-toolkit), not a copy of its source code.

## Features

- Claude Code slash-command workflow: `/setup`, `/video`, `/plan`, `/script`, `/storyboard`, `/brand`, `/design`, and `/scene-review`.
- Remotion explainer starter template with a local preview and MP4 render.
- Project creation, listing, and manifest validation CLI.
- Reusable brand profile and asset-source documentation.
- Clear extension points for voiceover and media-generation providers.

## Quick start

Requirements: Node.js 20+, npm, and FFmpeg for optional media conversion.

```bash
git clone https://github.com/vishalkonduru/Videogen.git
cd Videogen
npm install
npm run doctor
npm run create -- --name my-first-video --template explainer
cd projects/my-first-video
npm install
npm run studio
```

In another terminal, render the starter composition:

```bash
npm run render
```

The output is written to `projects/my-first-video/out/video.mp4`.

## CLI commands

Run these from the repository root:

| Command | Purpose |
|---|---|
| `npm run doctor` | Check Node, npm, and FFmpeg availability |
| `npm run create -- --name NAME --template explainer` | Create a video project |
| `npm run list` | List generated projects |
| `npm run validate -- --project projects/NAME` | Validate a project's manifest |
| `npm run script` | Print the script-writing worksheet |

## Claude Code workflow

Open Claude Code from the repository root and use the included slash commands. The workflow is:

`/setup → /video → Script → Storyboard → Assets → Scene Review → Design → Preview → Render`

The commands and skill files guide the agent through the creative process. They do not claim to run paid or hosted AI services automatically.

## Repository layout

```text
.claude/                 Agent instructions, skills, and slash commands
brands/                  Reusable brand profiles
docs/                    Setup and production guides
scripts/                 Project creation and validation CLI
templates/explainer/     Remotion starter template
projects/                Generated projects (gitignored)
assets/                  Shared media and fonts
integrations/            Optional provider extension points
```

## Current scope

The explainer template is a working Remotion starter composition. AI voiceover, image/video generation, music generation, screen recording, cloud GPU orchestration, and social publishing are extension points or future work, not included automated features yet. The included starter renders locally without API keys.

Never commit API keys. Copy `.env.example` to `.env` when configuring integrations and keep secrets out of Git.

## License

MIT. See [LICENSE](LICENSE).
