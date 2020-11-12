---
{
    "description": "The Kickstand UI checkbox form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability.",
    "meta": [
        {
            "property": "og:title",
            "content": "Text Form Field Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI checkbox form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        }
    ]
}
---

## Datalist

Similar to the `select` input, the `type` to `datalist` will provide you a list of suggestions that are filterable. Datalist is a native HTML feature, that has been incorporated into the `form field` component.

In order to display the datalist options, make sure the `datalist` property is `true` on the `<ks-form-field>` tag.

To create a list of available options, wrap the values in the `<option>` tag and add them between the opening and closing `<ks-form-field>` tag.

<div class="my-xl">
    <ks-form-field
        label="Email"
        type="email"
        datalist
        >
        <option>michael.scott@dundermifflin.com</option>
        <option>dwight.schrutte@dundermifflin.com</option>
        <option>pam.beasley@dundermifflin.com</option>
        <option>jim.halpert@dundermifflin.com</option>
        <option>Meredith.palmer@dundermifflin.com</option>
    </ks-form-field>
</div>

```html
<ks-form-field
    label="Email"
    type="datalist"
    datalist
    >
    <option>michael.scott@dundermifflin.com</option>
    <option>dwight.schrutte@dundermifflin.com</option>
    <option>pam.beasley@dundermifflin.com</option>
    <option>jim.halpert@dundermifflin.com</option>
    <option>Meredith.palmer@dundermifflin.com</option>
</ks-form-field>
```

:::warning
The HTML5 `datalist` feature is supported by all [modern browsers](https://caniuse.com/#feat=datalist), but is not consistently implemented. Make sure you test in different browsers to ensure you get the user experience you are looking for.

For a better autocomplete experience, check out the [autocomplete component](./autocomplete.md).
:::

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
