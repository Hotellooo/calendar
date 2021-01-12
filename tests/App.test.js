import App from '../client/App.jsx';
import moment from 'moment';

const today = moment();

jest.mock('../client/lib/getDataFromServer.js');
jest.mock('../client/lib/getUpdatedDataFromServer.js');

const portalRoot1 = global.document.createElement('div');
const portalRoot2 = global.document.createElement('div');
portalRoot1.setAttribute('id', 'calendar');
portalRoot2.setAttribute('id', 'guests');
const body = global.document.querySelector('body');
body.appendChild(portalRoot1);
body.appendChild(portalRoot2);

const wrapper = mount(<App />);

describe('<App> component testing', () => {

  beforeEach(() => {
    wrapper.setState({ calendarView: false });
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders MainWrapper', () => {
    expect(wrapper.find('[className^="App__MainWrapper-"]').length).toBe(1);
  });

  it('renders Header', () => {
    expect(wrapper.find('[className^="App__HeaderTextDiv-"]').length).toBe(1);
  });

  it('renders Header text', () => {
    expect(wrapper.text()).toContain('6 people are viewing this hotel');
  });

  it('renders DatePicker wrapper', () => {
    expect(wrapper.find('[className^="App__PickerWrapper-"]').length).toBe(1);
  });

  it('renders DatePicker buttons', () => {
    expect(wrapper.find('[className^="App__PickerButton-"]').length).toBe(2);
  });

  it('check-in button click changes component state', () => {
    let button = shallow(wrapper.find('[className^="App__PickerButton-"]').get(0));
    button.simulate('click');
    expect(wrapper.state().calendarView).toBe(true);
  });

  it('check-out button click changes component state', () => {
    let button = shallow(wrapper.find('[className^="App__PickerButton-"]').get(1));
    button.simulate('click');
    expect(wrapper.state().calendarView).toBe(true);
  });

  it('check-out button click changes component state', () => {
    let button = shallow(wrapper.find('[className^="App__PickerButton-"]').get(1));
    button.simulate('click');
    expect(wrapper.state().calendarView).toBe(true);
  });

  it('check-in button has icon', () => {
    const picker = mount(wrapper.find('[className^="App__PickerButton-"]').get(0));
    let icon = picker.find('svg').length;
    expect(icon).toBe(1);
  });

  it('check-in button displays correct text and date', () => {
    const picker = shallow(wrapper.find('[className^="App__PickerButtonField-"]').get(0)).text();
    expect(picker).toContain('Check In' && today.format('ddd') && today.format('MM/DD/YYYY'));
  });

  it('check-out button has icon', () => {
    const picker = mount(wrapper.find('[className^="App__PickerButton-"]').get(1));
    let icon = picker.find('svg').length;
    expect(icon).toBe(1);
  });

  it('check-out button displays correct text and date', () => {
    const picker = shallow(wrapper.find('[className^="App__PickerButtonField-"]').get(1)).text();
    const tomorrow = today.add(1, 'day');
    expect(picker).toContain('Check Out' && tomorrow.format('ddd') && tomorrow.format('MM/DD/YYYY'));
  });

  it('renders Guests button', () => {
    expect(wrapper.find('[className^="App__GuestPicker-"]').length).toBe(1);
  });

  it('guests button click changes component state', () => {
    const button = shallow(wrapper.find('[className^="App__Guest-"]').get(0));
    button.simulate('click');
    expect(wrapper.state().guestsView).toBe(true);
  });

  it('guests button has icon', () => {
    const picker = mount(wrapper.find('[className^="App__Guest-"]').get(0));
    let icon = picker.find('svg').length;
    expect(icon).toBe(1);
  });

  it('guests button displays correct text', () => {
    const text = shallow(wrapper.find('[className^="App__GuestPicker-"]').get(0)).text();
    const roomsNum = wrapper.state().userConfig.roomsNumber;
    const adultsNum = wrapper.state().userConfig.adultsNumber;
    const childrenNum = wrapper.state().userConfig.childrenNumber;
    expect(text).toContain('Guests' && `${roomsNum} room` && `${adultsNum} adults` && `${childrenNum} child`);
  });

  it('renders BestDeals', () => {
    expect(wrapper.find('[className^="BestDeals__Div"]').length).toBe(1);
  });

  it('renders AllDeals', () => {
    expect(wrapper.find('[className^="AllDeals__Wrapper-"]').length).toBe(1);
  });

});