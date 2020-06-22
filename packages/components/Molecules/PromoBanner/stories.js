import { storiesOf } from '@storybook/vue'
import RplPromoBanner from './index.vue'

import {
  withKnobs,
  text,
  object
} from '@storybook/addon-knobs/vue'

storiesOf('Molecules/Promo Banner', module)
  .addDecorator(withKnobs)

  .add('Default', () => ({
    components: { RplPromoBanner },
    template: `<rpl-promo-banner
      :backgroundColor="backgroundColor"
      :image="image"
      :title="title"
      :text="text"
      :links="links"
    />`,
    props: {
      backgroundColor: {
        default: text('Background Color', 'mid_neutral_1')
      },
      image: {
        default: () => object('Image', {
          src: 'https://placehold.it/304x199',
          alt: 'This is an image.'
        })
      },
      title: {
        default: text('Title', 'This heading could wrap over two lines')
      },
      text: {
        default: text('Text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua laboris nisi ut aliquip ex ea commodo consequat.')
      },
      links: {
        default: () => object('Link', [
          { text: 'First call to action', url: '#' },
          { text: 'Second call to action', url: '#' }
        ])
      }
    }
  }))
