# Frequently Asked Questions

## How do I setup a new project?

<!-- TODO: Documentation for creating new project. -->

## How do I enable/disable tide modules?

In `nuxt.config.js`, the tide.modules object contains a list of available tide
modules, each assigned a value of `1` (enabled) or `0` (disabled).

To find out more, refer to the [documentation](README.md#setup) for tide setup.

## How do I create a new page type?

<!-- TODO: Documentation for creating new page types. -->

## How do I override the theme?

Styling overrides to change the site's appearance can be added to:

- `/assets/_themes.scss`
- `/assets/_custom.scss`

To find out more, refer to the [documentation](README.md) for custom theming.

## How do I add Google Tag Manager (GTM) code?

A Google Tag Manager code can be added to the `.env` environment variables:

```ini
GTM_ID=GTM-XXXX
```

Ensure that:

1. The gtm module is enabled in `nuxt.config.js` tide modules settings.
2. The envrionemnt variable is being passed to the `tide.gtm.id` object.

```js
tide: {
  modules: {
    gtm: 1
  },
  gtm: {
    id: process.env.GTM_ID
  }
}
```

## How do I add e2e tests?

<!-- TODO: Documentation for creating e2e tests. -->

## How do I add my own landing page components?

<!-- TODO: Documentation for creating new components. -->

## How do I extend an existing component?

<!-- TODO: Documentation for extending existing components. -->
