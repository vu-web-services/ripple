# Frequently Asked Questions

## How do I setup a new project?

1. To set up a Tide content api server, refer to the following [documentation](https://github.com/dpc-sdp/tide).
2. To set up a nuxt-tide implementation, see the following sections below.

### How do I connect a Tide content API server?

To connect to a Tide content API server, `.env` should define the following:

* `CONTENT_API_SERVER` - a url to the server end-point.
* `SITE_ID` - the current site's taxonomy term id.

```ini
CONTENT_API_SERVER=https://example-content-platform.lagoon.vicsdp.amazee.io
SITE_ID=4
```

Ensure that the environment variables are being passed to the `tide` object.

```js
{
  tide: {
    baseUrl: process.env.CONTENT_API_SERVER,
    site: process.env.SITE_ID,
  }
}
```

### How do I enable search?

To enable search, `.env` should define the following:

* `SEARCH_HASH` - the elastic search hash (_https://**[SEARCH_HASH]**.[SEARCH_URL]_)
* `SEARCH_SERVICE` - should be `elasticsearch`
* `SEARCH_INDEX` - should be `elasticsearch_index_drupal_node`
* `SEARCH_URL` - the elastic search url (_https://[SEARCH_HASH].**[SEARCH_URL]**_)
* `SEARCH_LOG` - <!-- TODO - Define what this value does. -->
* `SEARCH_AUTH_USERNAME` - the username to connect to search service
* `SEARCH_AUTH_PASSWORD` - the password to connect to search service

```ini
SEARCH_HASH=XXX
SEARCH_SERVICE=elasticsearch
SEARCH_INDEX=elasticsearch_index_drupal_node
SEARCH_URL=elastic.sdp.vic.gov.au
SEARCH_LOG=
SEARCH_AUTH_USERNAME=search_username
SEARCH_AUTH_PASSWORD=search_password
```

Ensure that:

1. The search module is enabled in `nuxt.config.js`.
2. The environment variables are being passed to the `tide` object.

```js
{
  tide: {
    modules: {
      search: 1
    },
    search: {
      service: process.env.SEARCH_SERVICE,
      index: process.env.SEARCH_INDEX,
      url: 'https://' + process.env.SEARCH_HASH + '.' + process.env.SEARCH_URL,
      log: process.env.SEARCH_LOG,
      auth: {
        username: process.env.SEARCH_AUTH_USERNAME,
        password: process.env.SEARCH_AUTH_PASSWORD
      }
    }
  }
}
```

### How do I access a Tide content API server using an authentication shield?

If the Tide content API server requires a username and password to access,
these can be set in `.env` with the following properties:

```ini
CONTENT_API_AUTH_USER=username
CONTENT_API_AUTH_PASS=password
```

Ensure that the environment variables are being passed to the `tide` object.

```js
{
  tide: {
    auth: {
      username: process.env.CONTENT_API_AUTH_USER,
      password: process.env.CONTENT_API_AUTH_PASS
    }
  }
}
```

## How do I enable/disable tide modules?

In `nuxt.config.js`, the tide.modules object contains a list of available tide
modules, each assigned a value of `1` (enabled) or `0` (disabled).

To find out more, refer to the [documentation](README.md#setup) for tide setup.

## How do I create a new page type?

<!-- TODO: Documentation for creating new page types. -->

## How do I override the theme?

Styling overrides to change the site's appearance can be added to:

* `/assets/_themes.scss`
* `/assets/_custom.scss`

To find out more, refer to the [documentation](README.md) for custom theming.

## How do I add Google Tag Manager (GTM) code?

A Google Tag Manager code can be added to `.env`.

```ini
GTM_ID=GTM-XXXX
```

Ensure that:

1. The gtm module is enabled in `nuxt.config.js`.
2. The environment variable is being passed to the `tide` object.

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
