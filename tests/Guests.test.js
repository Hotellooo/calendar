import Guests from '../client/components/Guests.jsx';
import Wrapper from '../client/components/Guests.jsx';
import Children from '../client/components/Guests.jsx';

const mockFn = jest.fn();

const wrapper = mount(<Guests getUpdatedData={mockFn} updateGuestPickerInfo={mockFn} />);

describe('<Guests> component testing', () => {

  beforeEach(() => {
    wrapper.setState({roomsNumber: 1, adultsNumber: 2, childrenNumber: 1});
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a wrapper div', () => {
    expect(wrapper.find(Wrapper).length).toBeTruthy();
  });

  it('renders Children component', () => {
    expect(wrapper.find(Children).length).toBe(1);
  });

  it('renders default icons', () => {
    expect(wrapper.find('svg').length).toBe(10);
  });

  it('increments roomsNumber state count by 1 on "plus" click', () => {
    const button = shallow(wrapper.find('button').get(2));
    button.simulate('click', { currentTarget: { dataset: { id: '0'}} });
    expect(wrapper.state().roomsNumber).toBe(2);
  });

  it('increments adultsNumber state count by 1 on "plus" click', () => {
    const button = shallow(wrapper.find('button').get(2));
    button.simulate('click', { currentTarget: { dataset: { id: '1'}} });
    expect(wrapper.state().adultsNumber).toBe(3);
  });

  it('increments childrenNumber state count by 1 on "plus" click', () => {
    const button = shallow(wrapper.find('button').get(2));
    button.simulate('click', { currentTarget: { dataset: { id: '2'}} });
    expect(wrapper.state().childrenNumber).toBe(2);
  });

  it('decrements roomsNumber state count by 1 on "minus" click', () => {
    const button = shallow(wrapper.find('button').get(1));
    button.simulate('click', { currentTarget: { dataset: { id: '0'}} });
    expect(wrapper.state().roomsNumber).toBe(0);
  });

  it('decrements adultsNumber state count by 1 on "minus" click', () => {
    const button = shallow(wrapper.find('button').get(1));
    button.simulate('click', { currentTarget: { dataset: { id: '1'}} });
    expect(wrapper.state().adultsNumber).toBe(1);
  });

  it('decrements childrenNumber state count by 1 on "minus" click', () => {
    const button = shallow(wrapper.find('button').get(1));
    button.simulate('click', { currentTarget: { dataset: { id: '2'}} });
    expect(wrapper.state().childrenNumber).toBe(0);
  });

  it('renders Close button', () => {
    expect(wrapper.find('button').get(0).props.className).toContain('CloseButton');
  });

  it('renders Update button', () => {
    expect(wrapper.find('button').get(8).props.children).toBe('Update');
  });

  it('handles Update button click', () => {
    const button = shallow(wrapper.find('button').get(8));
    button.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});