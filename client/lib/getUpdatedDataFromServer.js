import axios from 'axios';

const getUpdatedDataFromServer = async (param) => {
  console.log('works')
  console.log(param)
  const response = await
  axios.get(`http://localhost:8080/api/calendar/update/?checkIn=${param.checkIn}&checkOut=${param.checkOut}&guestsNumber=${param.guestsNumber}&id=${param.id}&roomsNumber=${param.roomsNumber}`);
  console.log('RESPONSE',response.data)
  return response.data;
};

export default getUpdatedDataFromServer;