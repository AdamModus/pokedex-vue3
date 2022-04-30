import { shallowMount, VueWrapper } from '@vue/test-utils';
import NotFound from './NotFound.vue';

describe('NotFound.vue', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(NotFound);
  });

  it('should the NotFound View', () => {
    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
