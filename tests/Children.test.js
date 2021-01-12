import Children from '../client/components/Children.jsx';

const wrapper = mount(<Children childrenNumber={1}/>);

describe('<Children> component testing', () => {

  beforeEach(() => {
    wrapper.setProps({ childrenNumber: 1});
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 1 line by default', () => {
    expect(wrapper.text()).toContain('Child 1');
  });

  it('renders 5 lines if 5 passed as prop', () => {
    wrapper.setProps({ childrenNumber: 5 });
    expect(wrapper.text()).toContain('Child 5');
  });

  it('renders 1 icon by default', () => {
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  it('renders 10 icons if 10 passed as prop', () => {
    wrapper.setProps({ childrenNumber: 10 });
    expect(wrapper.find('svg').length).toBe(10);
  });
});