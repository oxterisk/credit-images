Version: 0.9

Give credit to the authors of the images you are usign in an elegant way.

![Preview image](img/image-credits.gif)

# Usage

Place the script near the end of your pages, right before the closing body tag.

```HTML
<script src="credit-images.min.js"></script>
```

Configure the data attributes. It must at least contain the attribute `data-credits` with the attribution to the image owner.

Images must be contained within a container (div, section, etc), figure or picture tag with the class `image-with-credits`.

```HTML
<div class="image-with-credits">
    <img src="img/pexels-pixabay-45229.jpg" data-credits='Photo by <a href="https://www.pexels.com/photo/water-droplet-in-shallow-photo-45229bb/" target="_blank">Pixabay</a>' />
</div>
```
```HTML
<figure class="image-with-credits">
    <img src="img/pexels-riyas-paloli-596710.jpg" data-credits='Photo by <a href="https://www.pexels.com/photo/water-splash-on-green-leaf-596710/" target="_blank">Riyas Paloli</a>' />
    <figcaption>Figure caption.</figcaption>
</figure>
```

## Parameters

Data attribute | Description
--- | ---
data-credits | Owner attribution
data-credits-pos | Position of the attribution.<br>top (default), bottom
data-credits-margin | Margin from the left and top or bottom depending of the position
data-credits-bg | Background color
data-credits-color | Text color (does not apply to links)

```HTML
<div class="image-with-credits">
    <img src="img/pexels-pixabay-45229.jpg"
        data-credits='Photo <a href="https://www.pexels.com/photo/water-droplet-in-shallow-photo-45229/" target="_blank">by Pixabay</a>'
        data-credits-pos="bottom"
        data-credits-margin="30px"
        data-credits-bg="gold"
        data-credits-color="fuchsia" />
</div>
```

# Known issues

- The attribution is positioned relative to the container that wraps the image, so it must always be inside a container (div, section, figure, picture, etc).
- Applying margin or padding directly on the image can cause the message to be outside the image. In some cases it can be corrected by setting a margin (`data-credits-margin`).
- If we add any element inside the image container (`image-with-credits`), it can alter the position of the message since the size of the container will be increased. For example, inside a `figure` the `figcaption` will alter the position of the message if it is in the same position (`figcaption` at the bottom with message at the bottom). They should be placed in opposite positions.
