# ZomiHub Interactive Library Prototype

ZomiHub is an online-first cultural media hub dedicated to the preservation and celebration of the Zomi people. The platform brings together films, TV programs, music, books, and research articles so that anyone can explore, stream, and save the stories that matter to them. While the experience is designed for connected devices, every item can also be downloaded so individuals can take treasured materials with them.

This repository contains a high-fidelity, multi-page front-end concept that demonstrates how members can browse the public collections, dive into format-specific experiences, and curate their own personal library once they sign in.

## Key Experience Highlights

- **Unified media hub:** A single interface to discover books, films, television series, and music related to the Zomi community.
- **Personal libraries:** Signed-in members can save items and see them organized automatically into media-specific shelves that look and feel native to each format.
- **Download ready:** Each item surfaces a download action to reinforce that visitors can keep copies for offline enjoyment when needed.
- **Rich storytelling:** Detail views, featured curators, and contextual highlights showcase why every piece of media is meaningful.
- **Responsive design:** The layout adapts for mobile, tablet, and desktop screens with intuitive navigation and accessible controls.

## Previewing the Prototype Locally

Choose the approach that best matches your tooling:

- **Quick Python server (pre-installed on macOS/Linux):**
  1. From the project directory run `python -m http.server 8000`.
  2. Visit [http://localhost:8000](http://localhost:8000) in your browser.

- **Node-powered live reload server:**
  1. Run `npm install` to install the single `http-server` dependency.
  2. Start the preview with `npm run dev` (serves the site at [http://localhost:4173](http://localhost:4173)).

Once the server is running, explore the experience:
   - **Home:** Get an overview of ZomiHub and try out the explore grid, timeline, and community stories.
   - **Collections:** Filter across every media format, follow curators, and jump into curated journeys.
   - **Books, Films, TV, Music, Articles:** Each page feels like a dedicated app with media-specific layouts and controls.
   - **My Library:** Review everything you have saved with media-native shelves and a download queue summary.
   - **Downloads:** Manage your offline prep list and mark items once they are stored locally.
   - **Community & About:** Learn how to contribute, submit archives, and understand ZomiHub's mission.

The prototype uses in-browser storage to remember your selections during the session, giving a realistic sense of how ZomiHub could operate once user accounts are connected to a backend service.

## Publishing a Live Preview with GitHub Pages

If you would like to share the prototype publicly without any additional infrastructure:

1. Fork or push this repository to your own GitHub account.
2. Ensure the repository has the default branch set to `main` (or update the workflow trigger if you prefer another branch).
3. In the repository settings, enable **GitHub Pages** for the `GitHub Actions` source.
4. On the next push to `main` the included workflow (`.github/workflows/deploy.yml`) will bundle the static site and deploy it to Pages.
5. The published URL will be shown in the workflow summary and follow the pattern `https://<your-username>.github.io/<repository-name>/`.

This approach keeps the experience entirely static so it remains fast, cost effective, and easy to maintain while you gather feedback from the community.

## Next Steps

- Implement authentication and profile management with a secure identity provider.
- Connect the front end to a CMS or content service that stores curated Zomi media, metadata, and streaming sources.
- Build download packaging services so media can be exported in respectful, rights-aware formats for offline personal use.
- Expand accessibility testing, localize the interface for Zomi and English, and onboard community curators to steward collections.

---

Use this prototype as a collaborative starting point for designers, engineers, and Zomi cultural leaders to shape a fully featured digital home for the community.
