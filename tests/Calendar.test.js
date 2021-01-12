import Calendar from '../client/components/Calendar.jsx';
import moment from 'moment';

const mockFn = jest.fn();

const wrapper = mount(<Calendar
  getUpdatedData={mockFn}
  calculateAvrgRate={mockFn}
  displayNotAvailableMsg={mockFn}
  changeCalendarView={mockFn}
/>);

describe('<Calendar> component testing', () => {

  beforeEach(() => {
    wrapper.setState({
      now: moment(),
      currentMonth: moment(),
      selectedDate: moment(),
      nextMonth: moment().add(1, 'month'),
      checkIn: false,
      checkOut: false,
      clickCounter: 0,
      averageRate: ''
    });
    jest.clearAllMocks();
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Close button', () => {
    expect(wrapper.find('[className^="Calendar__CloseButton-"]').length).toBe(1);
  });

  it('click on Close button changes view', () => {
    wrapper.find('[className^="Calendar__CloseButton-"]').props().onClick();
    expect(mockFn).toHaveBeenCalled();
  });

  it('renders Header', () => {
    expect(wrapper.find('[className^="Calendar__HeaderTop-"]').length).toBe(1);
  });

  it('renders Header text', () => {
    expect(wrapper.text()).toContain('Select a date to continue' && 'Lowest priced dates');
  });

  it('renders NavBar', () => {
    expect(wrapper.find('[className^="Calendar__NavBar-"]').length).toBe(1);
  });

  it('navBar has 2 navigation buttons', () => {
    expect(wrapper.find('[className^="Calendar__NavBarButton-"]').length).toBe(2);
  });

  it('navBar navigation buttons have 2 icons', () => {
    expect(wrapper.find('svg').length).toBe(2);
  });

  it('navBar "left" navigation button click changes state', () => {
    let button = shallow(wrapper.find('[className^="Calendar__NavBarButton-"]').get(0));
    button.simulate('click');
    expect(wrapper.state().currentMonth.format('YYYY-MM-DD')).toBe(moment().subtract(1, 'month').format('YYYY-MM-DD'));
  });

  it('navBar "right" navigation button click changes state', () => {
    let button = shallow(wrapper.find('[className^="Calendar__NavBarButton-"]').get(1));
    button.simulate('click');
    expect(wrapper.state().currentMonth.format('YYYY-MM-DD')).toBe(moment().add(1, 'month').format('YYYY-MM-DD'));
  });

  it('renders 2 calendar grids', () => {
    expect(wrapper.find('[className^="Calendar__CalendarGrid-"]').length).toBe(2);
  });

  it('calendar grids have Captions', () => {
    expect(wrapper.find('[className^="Calendar__Caption-"]').length).toBe(2);
  });

  it('caption-1 displays correct month and year', () => {
    let text = shallow(wrapper.find('[className^="Calendar__Caption-"]').get(0)).text();
    expect(text).toBe(moment().format('MMMM yyyy'));
  });

  it('caption-2 displays correct month and year', () => {
    let text = shallow(wrapper.find('[className^="Calendar__Caption-"]').get(1)).text();
    expect(text).toBe(moment().add(1, 'month').format('MMMM yyyy'));
  });

  it('calendar grids have Weekdays', () => {
    expect(wrapper.find('[className^="Calendar__Weekdays-"]').length).toBe(2);
  });

  it('weekdays are displayed in correct format', () => {
    let weekdays = shallow(wrapper.find('[className^="Calendar__Weekdays-"]').get(0)).text();
    expect(weekdays).toBe('SUNMONTUEWEDTHUFRISAT');
  });

  it('current day is correct', () => {
    let curr = shallow(wrapper.find('[className^="cell-today"]').get(0)).text();
    expect(curr).toBe(moment().format('DD'));
  });

  it('renders average price section', () => {
    expect(wrapper.find('[className^="Calendar__AverageSpan-"]').length).toBe(1);
  });

  it('average price section has correct text', () => {
    let text = shallow(wrapper.find('[className^="Calendar__AverageSpan-"]').get(0)).text();
    expect(text).toBe('Average daily rates: ');
  });

  it('average price section calculates average price', () => {
    wrapper.setProps({ calculateAvrgRate: mockFn });
    expect(mockFn).toHaveBeenCalled();
  });

  it('click on calendar cell updates component state', () => {
    const day = shallow(wrapper.find('.cell').get(0));
    day.simulate('click');
    expect(wrapper.state().clickCounter).toBe(1);
  });

});
