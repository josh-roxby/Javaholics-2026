# Media drop folder

This folder is where real photography and any assets exported from the
Instagram account get dropped in.

## How to use

1. Switch to the `media` branch on GitHub.
2. Navigate to `public/media/` and drag photos in via "Add file → Upload files".
3. Commit directly to the `media` branch.

A follow-up PR will merge `media` into `upload` and wire the files into the
components that currently use bean-SVG placeholders (stories, people, space
figure, store).

## Filename conventions

Please use lowercase, hyphens, no spaces, and include a short descriptor:

```
dara-at-bar.jpg
niamh-pouring.jpg
merville-morning.jpg
park-from-window.jpg
regulars-siobhan.jpg
regulars-oisin.jpg
regulars-priya.jpg
regulars-hannah.jpg
```

## Formats + sizing

- **Format**: JPG for photos, PNG only when transparency is needed, SVG for
  vector / icon assets.
- **Size**: originals are fine — Next.js `next/image` will resize them. Keep
  under ~3MB each so the repo stays snappy.
- **Orientation**: any — we'll pick which go in 3:4 portraits vs 4:5 story
  tiles vs 1.5:1 visit hero once they're in.

Once you've uploaded, ping me with which file is intended for which slot (or
just drop a list in the PR description) and I'll wire them up.
