# Markiana Schweitzer’s portfolio

## Preview the site

Unzip the download and open `index.html` in your browser. Click **Photography** to open the gallery. Keep the `assets` folder next to both HTML files so images, charts, and PDFs load.

## Add your own photos

1. Put your photos in `assets/photos/`. Use JPG or WebP for photographs, and use short names with lowercase letters and hyphens, such as `lake-michigan.jpg`. Around 1,600–2,000 pixels on the long edge is a good size for this gallery.
2. Open `photography.html` in a plain-text editor and find the comment that says **Add photo blocks here**. Paste the block below on the next line, inside the `photo-grid` div.
3. Change **both** instances of `lake-michigan.jpg` to the exact filename you uploaded. Replace the example caption and alt text. The caption is visible under the photo. Alt text briefly describes what the photo shows for people using screen readers.
4. Copy the block once per photo, in the order you want them displayed. Save the file and refresh the page. The “coming soon” message disappears automatically when you add the first photo. Clicking a photo opens the full image.

```html
<figure>
  <a href="assets/photos/lake-michigan.jpg">
    <img src="assets/photos/lake-michigan.jpg"
         alt="Dune grass in front of Lake Michigan at sunset"
         loading="lazy">
  </a>
  <figcaption>Lake Michigan at sunset</figcaption>
</figure>
```

## Upload to GitHub Pages

1. Extract the ZIP. Keep `index.html`, `photography.html`, and the `assets` folder together.
2. In your repository, choose **Add file → Upload files**. Drag the extracted contents into the upload box together, including the `assets` folder, then commit the changes. `index.html` should appear at the top level of the publishing folder.
3. Under **Settings → Pages**, choose **Deploy from a branch**. Select your publishing branch (usually `main`) and **/(root)** if you uploaded to the repository root. Save. GitHub will show the site URL when it finishes deploying.
4. For future gallery updates, upload the edited `photography.html` and the new photos at their matching paths under `assets/photos/`.

[GitHub Pages setup guide](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
