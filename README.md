# The Firm Archive — SUITS Fan Project

A mobile-first, no-build static website inspired by the fictional law firms and characters of *Suits*. It runs with plain HTML, CSS, and JavaScript and can be hosted on GitHub Pages.

## Files
- `index.html` — page structure and sections
- `styles.css` — responsive white/navy corporate design
- `script.js` — timeline, character directory, canon-reference case files, and local war-room board

## Run locally
Open `index.html` in a browser. No install or build step is required.

## Publish using GitHub on mobile
1. Open GitHub and create a **public repository** named `suits-firm-archive` (or another name).
2. Open the repository and use **Add file → Upload files**. Upload `index.html`, `styles.css`, `script.js`, and `README.md` from this folder/ZIP after extracting it.
3. Commit the files to the `main` branch.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose branch **main** and folder **/(root)**, then save.
7. Wait for the Pages deployment to finish. The site URL appears in Settings → Pages and usually follows `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

If the mobile GitHub interface hides Settings, open the repository page, tap the `…` menu or switch your browser to **Desktop site**, then look for Settings → Pages.

## Important notes
- This is an unofficial, non-commercial fan project. It is not affiliated with or endorsed by NBCUniversal, the creators, cast, or rights holders of *Suits*.
- Character names and show references belong to their respective rights holders. The site intentionally uses a text-based monogram rather than official logos and does not bundle copyrighted episode stills.
- Case files are short fan-reference summaries of selected storylines, not complete legal records or legal advice. Verify episode details if you expand the canon archive.
- The War Room board stores user-entered matters in the current browser's `localStorage`. It is not a real legal case management system and does not sync across devices.
- GitHub Pages is static hosting. No backend, account system, or secret API key is required.
