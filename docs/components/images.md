---
{
    "description": "The Kickstand UI image component provides an easy way to implement lazy-loading for your images.",
    "meta": [
        {
            "property": "og:title",
            "content": "Image Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/images.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI image component provides an easy way to implement lazy-loading for your images."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/images.png"
        }
    ]
}
---

# Images

The biggest advantage the Kickstand UI image component brings is the ability to lazy-load off-screen images and control when they get loaded. This example is above the fold so it will load right away because it is already above the fold, but the image at the bottom of this page will be lazy-loaded.

<div class="my-xl text-center">
    <ks-img
        src="/images/demo/superstitious.jpg"
        alt="Michael Scott"
        class="w-75"
        lazy
        />
</div>

```html
<ks-img src="/images/demo/superstitious.jpg" alt="Michael Scott" lazy></ks-img>
```

## Properties

| Property    | Attribute   | Description                                                        | Type      | Default     |
| ----------- | ----------- | ------------------------------------------------------------------ | --------- | ----------- |
| `alt`       | `alt`       | alternate text for image                                           | `string`  | `undefined` |
| `lazy`      | `lazy`      | toggles whether an image will be lazy loaded                       | `boolean` | `undefined` |
| `src`       | `src`       | url to image                                                       | `string`  | `undefined` |
| `threshold` | `threshold` | distance from the bottom of the viewport a lazy image will display (in pixels) | `number`  | `300`       |

<div class="my-xl text-center">
    <ks-img
        src="/images/demo/michael_scott.jpg"
        alt="Michael Scott"
        class="w-50"
        lazy
        />
    <div class="text-lg mt-sm">I was lazy-loaded!!!</div>
</div>

```html
<ks-img src="/images/demo/michael_scott.jpg" alt="Michael Scott" lazy threshold="500"></ks-img>
```
