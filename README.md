# Markiana Schweitzer portfolio

## Preview and publish

Open `index.html` in your browser to preview. To publish, use [Upload files on GitHub](https://github.com/schweitm/portfolio/upload/main) and drag in all the files from this folder. When you open the repository on GitHub, `index.html`, `photography.html`, `styles.css`, and the linked samples should appear together at the root.

In **Settings → Pages**, select **Deploy from a branch**, then **main** and **/(root)**. Check the **Actions** tab for the Pages deployment. The site is at [schweitm.github.io/portfolio](https://schweitm.github.io/portfolio/).

## Add your photos

1. Put your JPG or WebP files beside `photography.html`. Use short, lowercase names with hyphens, such as `lake-michigan.jpg`. Around 1,600 to 2,000 pixels on the long edge works well.
2. Open `photography.html` in a plain-text editor. Find the comment that says **Add photo blocks here**. Paste the example underneath it, inside the `photo-grid` div.
3. Change both occurrences of `lake-michigan.jpg` to the exact name of your photo. Replace the caption and the alt text. The caption is visible under the image, and the alt text describes it for people using screen readers. If your text uses an ampersand, type `&amp;` in the HTML.
4. Repeat for each photo in the order you want them to appear. Save the file and refresh your local preview. The placeholder disappears when there is a photo, and clicking a thumbnail opens the full image.
5. Upload the edited `photography.html` together with the new images to the root of the repo and commit the changes.

```html
<figure>
  <a href="lake-michigan.jpg">
    <img src="lake-michigan.jpg"
         alt="Dune grass in front of Lake Michigan at sunset"
         loading="lazy">
  </a>
  <figcaption>Lake Michigan at sunset</figcaption>
</figure>
```
