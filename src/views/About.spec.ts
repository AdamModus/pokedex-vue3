import { shallowMount, VueWrapper } from '@vue/test-utils';
import About from './About.vue';

describe('About.vue', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(About);
  });

  it('should the About View', () => {
    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
