## Better Steam

The "Better Steam" browser extension was built to remove annoyances from Steam and add helpful info. Use the links below to install on your favorite browser.

- [Google Chrome](https://chromewebstore.google.com/detail/better-steam/iobagpbkbdkobggejjcnidehfenchpec)
- [Firefox (coming soon)](#)
- [Edge (coming soon)](#)

### Features

- [x] Skip age check on Steam Store pages
- [x] Skip age check on Steam Community Hub pages
- [x] Hide the global "Install Steam" button from the header
- [x] Bypass link filter outgoing link pages
- [x] Include Steambase's "Player Score" directly on Store pages
- [x] Include minimal link to view Steam charts directly on Store pages
- [x] Include game stats directly on Store pages (player count, all-time peak, community hub members)

### Have a feature request?

Share your feature request in the [Steambase Discord Server](https://discord.gg/AmmsccWEhZ) with your features requests, suggestions, and any bug reports about the extension!

## Better Steam Website

Better Steam is powered by Steambase go fetch game charts, stats, price and other data. Checkout [Steambase](https://steambase.io) to explore more Steam data.

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
