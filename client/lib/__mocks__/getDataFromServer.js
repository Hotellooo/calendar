import mockData from '../../../mockData';

const getDataFromServer = (term) => {
  return new Promise((resolve, reject) => resolve(mockData.currentHotel));
};

export default getDataFromServer;