import axios from 'axios';

const getDataFromServer = async (term) => {
  try{
    const response = await axios.get(`/api/calendar/hotels/${term}`);
    console.log('==GET DFS==RESPONSE', response.data);
    return response.data;
  } catch (err) {
    console.log('Error: in getDataFromServer', err);
  }
};

export default getDataFromServer;