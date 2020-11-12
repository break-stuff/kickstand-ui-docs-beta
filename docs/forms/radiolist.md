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

## Radiolist

Checklists are great if users need to be able to choose multiple options from a predetermined list. Kickstand UI's checklist leverages the existing `<option>` element to provide the checklist options and just like the option element you can pre-select options using the `select` attribute as well as specify alternate values with the `value` attribute.

<div class="my-xl">
    <ks-form-field type="radiolist" label="Choose your next office mate">
        <option value="michael.scott@dundermifflin.com">Michael Scott</option>
        <option value="dwight.schrutte@dundermifflin.com">Dwight Schrutte</option>
        <option value="pam.beasley@dundermifflin.com" selected>Pam Beasley</option>
        <option value="jim.halpert@dundermifflin.com">Jim Halpert</option>
        <option value="Meredith.palmer@dundermifflin.com">Meredith Palmer</option>
    </ks-form-field>
</div>

```html
<ks-form-field type="radiolist" label="Choose your next office mate">
    <option value="michael.scott@dundermifflin.com">Michael Scott</option>
    <option value="dwight.schrutte@dundermifflin.com">Dwight Schrutte</option>
    <option value="pam.beasley@dundermifflin.com" selected>Pam Beasley</option>
    <option value="jim.halpert@dundermifflin.com">Jim Halpert</option>
    <option value="Meredith.palmer@dundermifflin.com">Meredith Palmer</option>
</ks-form-field>
```


## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
