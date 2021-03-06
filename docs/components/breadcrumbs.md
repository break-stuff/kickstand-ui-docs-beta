---
{
    "description": "Breadcrumbs are a navigation tool to provide a visual reference to the current page's location within the site hierarchy.",
    "meta": [
        {
            "property": "og:title",
            "content": "Breadcrumbs Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/breadcrumbs.png"
        },
        {
            "property": "og:description",
            "content": "Breadcrumbs are a navigation tool to provide a visual reference to the current page's location within the site hierarchy."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/breadcrumbs.png"
        }
    ]
}
---

# Breadcrumbs

Breadcrumbs are a navigation tool to provide a visual reference to the current page's location within the site hierarchy.

<div class="my-lg">
    <ks-breadcrumbs>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Bacon Flavored Toothpaste</a>
        <a href="#">Details</a>
    </ks-breadcrumbs>
</div>

```html
<ks-breadcrumbs>
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">Bacon Flavored Toothpaste</a>
    <a href="#">Details</a>
</ks-breadcrumbs>
```

## Accessibility

To make the breadcrumb identifiable as a navigational landmark the component is assigned `role="navigation"`. The breadcrumbs are also arranged in an order list (`<ol>`) to make it easier for screen readers to identify it as hierarchical data.

The last item in the breadcrumb will have the attribute `aria-current="page"` to indicate the page they are on, so please be sure that the page the user is currently on is included as the last item in the breadcrumb.

## Properties

### `<ks-breadcrumbs>`

The `<ks-breadcrumbs>` component has no custom properties.
