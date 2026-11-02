# Portfolio update — November 2026

This is a drop-in code update for https://ilyesoul.github.io/portfolio_site/.

## Install

1. Extract this archive.
2. Copy `index.html`, `pages_design/`, and `functionality/` into the root of the existing `portfolio_site` repository, merging folders and replacing the matching files.
3. Keep the existing `Images/`, `sounds/`, and PDF files. They are reused without changes and are deliberately not duplicated in this small update archive.
4. Commit and push to the branch used by GitHub Pages. The public site changes after GitHub Pages finishes its deployment.

For a local preview, run `python3 -m http.server 8000` from the repository root, then open http://localhost:8000/. No npm install or build step is required.

## Included

- New Fall 2026 Nepf Lab UROP overview and detail pages (`nepf.html`, `nepf_detail.html`).
- Fidelity internship as its own sidebar destination, with overview and detail pages.
- Updated About pages: current ML progress, robotics and healthcare interests, coursework divided into completed and Fall 2026 in progress, Python experience increased from 4 to 6 years.
- Updated biomedical research and independent-study pages; new Frugal Sheets and LISP Interpreter pages.
- All original project categories, descriptions, screenshots, videos, and source links retained in responsive layouts.
- A consistent “pages” sidebar with destination labels on hover and keyboard focus; an expandable menu with visible labels on phones.
- Existing JavaScript entry-point filenames retained. Star generation now lives in `functionality/layout-utils.js`: one lifecycle, unique IDs, stable star positions, no page-height growth, no resize/scroll regeneration, and reduced-motion support.
- Audio playback can be paused and fades within the valid volume range.

## Content sources

The new professional details follow the October 2026 resumes and prior project discussions. Ongoing Fall UROP work is presented as ongoing. No illustrative results from the earlier progress-slide draft are used.

## Verification

- Checked all 34 HTML pages for local link and asset targets, unique IDs, nine navigation entries, and a single active navigation state.
- JavaScript syntax checked.
- Browser-reviewed representative desktop, tablet, 390-pixel, and 320-pixel views, plus mobile navigation and audio playback.

This archive updates the source files; it has not been pushed to GitHub or deployed to the public portfolio.
