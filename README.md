# Videogen

An AI-assisted video production toolkit for turning a brief into a structured, editable video project. It combines guided workflows, reusable Remotion templates, brand profiles, asset management, and optional AI voiceover/image-generation integrations.

This project is an independent implementation inspired by the workflow ideas in [Digital Samba's Claude Code Video Toolkit](https://github.com/digitalsamba/claude-code-video-toolkit). It does not copy that project's source files.

## What it does

- **Plan** a video from a brief, audience, duration, and format.
- **Write** a scene-by-scene script with narration and visual directions.
- **Create** a Remotion project from a starter template.
- **Manage** brand colors, fonts, logos, and reusable assets.
- **Generate** optional voiceover audio through pluggable providers.
- **Preview and render** MP4 videos with Remotion.
- **Track** project status across sessions with a simple project manifest.

## Quick start

Requirements: Node.js 20+, npm, and (optionally) Python 3.10+.

```bash
git clone https://github.com/vishalkonduru/Videogen.git
cd Videogen
npm install
npm run doctor
npm run create -- --name my-first-video --template explainer
cd projects/my-first-video
npm install
npm run studio
# In another terminal:
npm run render
```

The starter project renders with local assets and does not require API keys. AI services are optional and must be configured separately.

## Toolkit commands

Run from the repository root:

| Command | Purpose |
|---|---|
| `npm run doctor` | Check Node, npm, FFmpeg, and project prerequisites |
| `npm run create -- --name NAME --template explainer` | Create a video project |
| `npm run list` | List projects and their current phase |
| `npm run validate -- --project projects/NAME` | Validate the project manifest and referenced assets |
| `npm run script -- --project projects/NAME` | Print the script-writing checklist |

## Workflow

`Brief → Script → Storyboard → Assets → Voiceover → Preview → Render → Publish`

1. Define the audience, objective, platform, aspect ratio, and target duration.
2. Draft narration and visual direction for each scene.
3. Review the storyboard and gather or generate assets.
4. Add voiceover and music (optional).
5. Preview in Remotion Studio and refine timing.
6. Validate and render the final MP4.

## Project layout

```text
.claude/                 Agent instructions and guided slash commands
brands/                  Reusable brand profiles
docs/                    Setup and workflow guides
scripts/                 Project creation and validation CLI
templates/explainer/     Remotion starter template
projects/                Generated projects (gitignored)
assets/                  Shared media and fonts
```

## AI integrations

The core project workflow is local-first. Provider integrations are optional:

- Voiceover: bring your own provider/API key and implement the adapter in `integrations/voiceover/`.
- Image/video generation: create assets with your preferred provider and place them in the project asset folders.
- Music: use properly licensed or original music only.

Never commit API keys. Copy `.env.example` to `.env` and keep secrets out of Git.

## License

MIT. See [LICENSE](LICENSE).
