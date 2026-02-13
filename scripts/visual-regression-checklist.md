# Visual Regression Checklist (Online-Only Workflow)

Use this checklist when chart UI/export behavior changes.
This project is intended to run from GitHub/online hosting (no local install required).

## 1) Open deployed app
- Open the GitHub Pages (or deployed) URL for the branch/version under review.
- Confirm latest commit is deployed before checking visuals.

## 2) Capture baseline screenshots (manual)
- Results tab: LCOE + Generation charts visible
- Payback tab: controls + chart visible
- Exported images for each preset:
  - `PowerPoint (16:9)`
  - `Report (4:3)`
  - `Native Size`

> Suggested naming:
> - `baseline-results-tab.png`
> - `baseline-payback-tab.png`
> - `export-lcoe-ppt.png`, `export-lcoe-report.png`, etc.

## 3) Verify quality
- Typography consistency: title, legend, axis labels readable
- Chart container spacing and borders are consistent
- Exported image includes white background + title + generated timestamp
- Filename contains preset + timestamp suffix
- Copy-to-clipboard behavior:
  - Supported browser: copy success message appears
  - Unsupported browser: fallback message appears

## 4) Pass/Fail template
- [ ] Results tab baseline matches expected layout
- [ ] Payback tab baseline matches expected layout
- [ ] Export preset: ppt
- [ ] Export preset: report
- [ ] Export preset: native
- [ ] Clipboard supported path works
- [ ] Clipboard unsupported path shows fallback message

## 5) Troubleshooting (online environment)
- If latest UI change not visible, verify deployment status/caching first.
- Hard refresh or open in incognito to avoid stale assets.
- If browser blocks clipboard APIs, validate fallback message instead.
