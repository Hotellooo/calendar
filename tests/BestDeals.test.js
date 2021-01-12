import mockData from '../mockData';
import BestDeals from '../client/components/BestDeals.jsx';
import getBestOrRestDeals from '../client/lib/getBestOrRestDeals';

const wrapper = mount(<BestDeals
  currentHotel={mockData.currentHotel}
  userDates={mockData.userDates}
/>);

describe('<BestDeals> component testing', () => {

  beforeEach(() => {
    wrapper.setProps({currentHotel: mockData.currentHotel, userDates: mockData.userDates});
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('displays "Loading..." while data fetching', () => {
    wrapper.setProps({currentHotel: []});
    expect(wrapper.find('div').text()).toContain('Loading...');
  });

  it('renders 2 best deals components', () => {
    const mockBest = getBestOrRestDeals(mockData.currentHotel, 'getBest');
    expect(mockBest.length).toBe(2);
  });

});

