import mockData from '../mockData';
import BestDealsEntity from '../client/components/BestDealsEntity.jsx';

const wrapper = mount(<BestDealsEntity item={mockData.item} userDates={mockData.userDates}/>);

describe('<BestDealsEntity> component testing', () => {

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct logo', () => {
    let link = wrapper.find('img').props().src;
    expect(link).toBe('https://static.tacdn.com/img2/branding/hotels/Hotelscom_384x164.png');
  });

  it('renders correct price', () => {
    expect(wrapper.text()).toContain(`$${wrapper.props().item.price}`);
  });

  it('renders correct cancellation date', () => {
    expect(wrapper.text()).toContain('12/08/20');
  });

  it('renders 2 check icons', () => {
    expect(wrapper.find('svg')).toHaveLength(2);
  });

  it('renders View Deal div', () => {
    expect(wrapper.text()).toContain('View Deal');
  });

  it('renders "Reserve now, pay at stay" text', () => {
    expect(wrapper.text()).toContain('Reserve now, pay at stay');
  });

});