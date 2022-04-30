import { shallowMount } from '@vue/test-utils';
import About from './About.vue';

describe('About.vue', () => {
  const defaultMountOptions = {};
  let wrapper;

  function getWrapper(mountOptions = defaultMountOptions) {
    return shallowMount(About, mountOptions);
  }

  it('renders the About View', () => {
    // Arrange
    wrapper = getWrapper();

    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
