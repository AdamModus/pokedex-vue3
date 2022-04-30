import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import Home from './Home.vue';

describe('Home.vue', () => {
  const defaultMountOptions = {
    global: {
      plugins: [createTestingPinia()],
    },
  };
  let wrapper;

  function getWrapper(mountOptions = defaultMountOptions) {
    return shallowMount(Home, mountOptions);
  }

  it('renders the Home View', () => {
    // Arrange
    wrapper = getWrapper();

    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
