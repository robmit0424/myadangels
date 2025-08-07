# Backup Files

This directory contains backup copies of files that were replaced during development.

## Files:

- `original-home-page.tsx` - The original Ad Angels landing page with full content (sections, team info, market stats, etc.)
  - This was the complete landing page before being replaced with the coming soon page
  - Can be restored by copying back to `app/page.tsx` when ready to launch

## How to restore:

To restore the original home page:
```bash
cp backup/original-home-page.tsx app/page.tsx
```

To restore the investment page:
```bash
mv app/investment.disabled app/investment
```