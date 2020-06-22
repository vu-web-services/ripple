import { createLocalVue, mount } from '@vue/test-utils'
import RplGlobal from '@dpc-sdp/ripple-global'
import PromoBanner from '../index'

const localVue = createLocalVue()
localVue.use(RplGlobal)

const DEFAULT_PROPS_DATA = {
  backgroundColor: 'mid_neutral_1',
  image: {
    src: 'https://placehold.it/304x199',
    alt: 'This is an image.'
  },
  title: 'This heading could wrap over two lines',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua laboris nisi ut aliquip ex ea commodo consequat.',
  links: [
    { text: 'First call to action', url: '#' },
    { text: 'Second call to action', url: '#' }
  ]
}

describe('PromoBanner', () => {
  it('Renders when all props are provided.', () => {
    const wrapper = mount(PromoBanner, { propsData: DEFAULT_PROPS_DATA, localVue })
    expect(wrapper.isVueInstance()).toEqual(true)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Renders when image is not provided.', () => {
    const { image, ...propsData } = DEFAULT_PROPS_DATA
    const wrapper = mount(PromoBanner, { propsData, localVue })
    expect(wrapper.isVueInstance()).toEqual(true)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Renders when title is not provided.', () => {
    const { title, ...propsData } = DEFAULT_PROPS_DATA
    const wrapper = mount(PromoBanner, { propsData, localVue })
    expect(wrapper.isVueInstance()).toEqual(true)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Renders when text is not provided.', () => {
    const { text, ...propsData } = DEFAULT_PROPS_DATA
    const wrapper = mount(PromoBanner, { propsData, localVue })
    expect(wrapper.isVueInstance()).toEqual(true)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Renders when links are not provided.', () => {
    const { links, ...propsData } = DEFAULT_PROPS_DATA
    const wrapper = mount(PromoBanner, { propsData, localVue })
    expect(wrapper.isVueInstance()).toEqual(true)
    expect(wrapper.element).toMatchSnapshot()
  })
})
