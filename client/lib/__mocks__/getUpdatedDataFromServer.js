import mockData from '../../../mockData';

const getUpdatedDataFromServer = (term) => {
  let newHotel = {};
  let mockObj = mockData.currentHotel[0];
  let keys = Object.keys(mockObj);
  for (let i = 0; i < keys.length; i++) {
    newHotel[keys[i]] = mockObj[keys[i]];
  }
  for (let i = 0; i < newHotel.prices.length; i++) {
    newHotel.prices[i].price *= term.roomsNumber;
  }
  return new Promise((resolve, reject) => resolve([newHotel]));
};

export default getUpdatedDataFromServer;