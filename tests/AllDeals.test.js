import AllDeals from '../client/components/AllDeals.jsx';
import getBestOrRestDeals from '../client/lib/getBestOrRestDeals';
import mockData from '../mockData';

const mockFn = jest.fn();
const wrapper = mount(<AllDeals currentHotel={mockData.currentHotel}/>);

//create divs to attach portals
const portalRoot1 = global.document.createElement('div');
const portalRoot2 = global.document.createElement('div');
portalRoot1.setAttribute('id', 'viewAll');
portalRoot2.setAttribute('id', 'popup');
const body = global.document.querySelector('body');
body.appendChild(portalRoot1);
body.appendChild(portalRoot2);

describe('<AllDeals> component testing', () => {

  beforeEach(() => {
    wrapper.setProps({ currentHotel: mockData.currentHotel });
    wrapper.setState({ isClicked: false, allDealsView: false, popUpVis: false });
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('displays "Loading data..." while data fetching', () => {
    wrapper.setProps({currentHotel: []});
    expect(wrapper.text()).toContain('Loading data...');
  });

  it('excludes deals listed in <BestDeals>', () => {
    const mockBest = getBestOrRestDeals(mockData.currentHotel, 'getRest');
    expect(mockBest).toHaveLength(5);
  });

  it('renders 4 deals by default', () => {
    let count = wrapper.find('[className^="AllDeals__EntityInner"]').length;
    expect(count).toBe(4);
  });

  it('renders 5 icons by default', () => {
    expect(wrapper.find('svg')).toHaveLength(5);
  });

  it('click on View All updates component state', () => {
    wrapper.find('[className^="AllDeals__ViewAllWrapper"]').props().onClick();
    expect(wrapper.state().allDealsView).toBe(true);
  });

  it('onMouseOver event updates component state', () => {
    wrapper.find('[className^="AllDeals__BottomDiv"]').props().onMouseOver();
    expect(wrapper.state().popUpVis).toBe(true);
  });

  it('onMouseOut event updates component state', () => {
    wrapper.find('[className^="AllDeals__BottomDiv"]').props().onMouseOver();
    wrapper.find('[className^="AllDeals__BottomDiv"]').props().onMouseOut();
    expect(wrapper.state().popUpVis).toBe(false);
  });

});

