import getUpdatedDataFromServer from '../client/lib/getUpdatedDataFromServer';
import mockData from '../mockData';

jest.mock('../client/lib/getUpdatedDataFromServer.js');

var fetched = [];

describe('<Helper-functions: getUpdatedDataFromServer> testing', () => {

  beforeEach(async () => {
    let res = await getUpdatedDataFromServer({roomsNumber: 3});
    fetched = res;
  });

  it('returns 1 querried hotel', () => {
    expect(fetched).toHaveLength(1);
  });

  it('returns hotel with correct properties', () => {
    let flag = true;
    let properties = ['_id', 'id', 'hotelName', 'roomsTotal', 'maxGuestPerRoom', 'vacancy'];
    properties.forEach((prop) => {
      if (!(prop in fetched[0])) flag = false;
    });
    expect(flag).toBe(true);
  });

  it('returns hotel with prices from 10 services', () => {
    expect(fetched[0].prices).toHaveLength(10);
  });

  it('returns hotel with correct vacancy list', () => {
    expect(fetched[0].vacancy).toBeTruthy();
  });

  it('returns hotel with updated properties', () => {
    expect(mockData.currentHotel[0].prices[0].price).not.toBe(fetched[0].prices[0]);
  });

});