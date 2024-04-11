## Better Steam

The "Better Steam" browser extension was built to remove annoyances from Steam and add helpful info. Use the links below to install on your favorite browser.

- [Google Chrome](https://chromewebstore.google.com/detail/better-steam/iobagpbkbdkobggejjcnidehfenchpec)
- [Firefox (coming soon)](#)
- [Edge (coming soon)](#)

## Better Steam Website

Better Steam is powered by Steambase go fetch game charts, stats, price and other data. Explore [Steambase](https://steambase.io) to explore more Steam data.

## Firefox Production Build & Bundle Steps

Run the following in the root directory of this repository. Requirements:

- Any operating system which supports running [Bun](https://bun.sh/)
- Bun >= `1.1.3`

```bash
bun install
bun wxt zip -b firefox
```

Once the extensions has been built and bundled, the artifact .zip file can be
found in the `.output` directory.
