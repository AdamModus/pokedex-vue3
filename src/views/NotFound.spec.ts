import { shallowMount } from '@vue/test-utils';
import NotFound from './NotFound.vue';

describe('NotFound.vue', () => {
  const defaultMountOptions = {};
  let wrapper;

  function getWrapper(mountOptions = defaultMountOptions) {
    return shallowMount(NotFound, mountOptions);
  }

  it('renders the NotFound View', () => {
    // Arrange
    wrapper = getWrapper();

    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
