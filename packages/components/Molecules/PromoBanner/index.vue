<template>
  <rpl-container class="rpl-promo-banner" :class="baseBackgroundColor">
    <rpl-row class="rpl-promo-banner__row">
      <rpl-col v-if="image" cols="full" :colsBp="{s: 4, m: 3}">
        <img class="rpl-promo-banner__image" ref="image" :src="image.src" :alt="image.alt" />
      </rpl-col>
      <rpl-col cols="full" :colsBp="{s: 8, m: 6}">
        <h2 class="rpl-promo-banner__title" v-if="title">{{ title }}</h2>
        <p v-if="text">{{ text }}</p>
        <ul v-if="links && links.length" class="rpl-promo-banner__links">
          <li v-for="link in links" :key="link.text" class="rpl-promo-banner__link">
            <rpl-link :href="link.url" :target="link.target">{{ link.text }}</rpl-link>
          </li>
        </ul>
      </rpl-col>
    </rpl-row>
  </rpl-container>
</template>

<script>
import { RplContainer, RplRow, RplCol } from '@dpc-sdp/ripple-grid'
import RplLink from '@dpc-sdp/ripple-link'

export default {
  name: 'RplPromoBanner',
  components: {
    RplContainer,
    RplRow,
    RplCol,
    RplLink
  },
  props: {
    backgroundColor: { type: String, default: 'mid_neutral_1' },
    image: Object,
    title: String,
    text: String,
    links: Array
  },
  computed: {
    baseBackgroundColor () {
      return this.backgroundColor ? `rpl-promo-banner--color-${this.backgroundColor}` : null
    }
  }
}
</script>

<style lang="scss">
  @import "~@dpc-sdp/ripple-global/scss/settings";
  @import "~@dpc-sdp/ripple-global/scss/tools";

  $rpl-promo-banner-base-background-color: rpl-color('mid_neutral_1') !default;
  $rpl-promo-banner-base-padding: ($rpl-space * 10) ($rpl-space * 8) !default;

  .rpl-promo-banner {
    $rpl-all-colors: rpl-get-colors();

    background-color: $rpl-promo-banner-base-background-color;
    padding: $rpl-promo-banner-base-padding;

    @each $color-name, $color-value in $rpl-all-colors {
      &--color-#{str-replace($color-name, ' ', '-')} {
        background-color: rpl-color($color-name);
      }
    }

    &__image {
      margin-bottom: ($rpl-space * 8);
      max-width: 100%;
    }

    &__title { margin-top: 0; }

    &__links {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    &__link {
      margin: ($rpl-space * 8) 0 0;
    }

    @include rpl_breakpoint('s') {
      &__row {
        flex-direction: row-reverse;
        justify-content: space-between;
      }

      &__image { margin-bottom: 0; }

      &__link {
        display: inline-block;

        &:not(:last-child) { margin-right: ($rpl-space * 5); }
      }
    }
  }
</style>
