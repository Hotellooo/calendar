const express = require('express');
const app = express();
const port = 3001;
const morgan = require('morgan');
const parser = require('body-parser');
const db = require('../database/index.js');
const moment = require('moment');
const cors = require('cors');
app.use(cors());

app.listen(port, () => console.log(`App listening on http://localhost:${port}`));

app.use(morgan('dev'));
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use(express.static('public'));


//Get  // ORINGINAL
app.get('/api/calendar/db/:hotelIdOrName', (req, res) => {
  console.log('REQUEST FROM HELP FUNC RECIEVED!');
  console.log(req.params);
  let q = req.params.hotelIdOrName;
  let parsed = parseInt(q);
  if (parsed) {
    search = {'id': q};
    console.log(search);
  } else {
    search = {'hotelName': {'$regex': q.slice(0, 1).toUpperCase() + q.slice(1)}};
  }
  db.model.find(search, (err, data) => {
    console.log('QUERY SENT');
    if (err) {
      console.log('DB QUERY ERROR', err);
      res.status(400).send();
    } else {
      console.log('DB QUERY SUCCESS');
      res.status(200).send(data);
    }
  });
});


//Read


//Create
app.post('/api/crud/create', (req, res) => {

  //If no data
  if (req.body === undefined) {
    res.sendStatus(400);
  }

  console.log('CRUD - Create NEW HOTEL RECORD');
  let q = req.body;
  const newHotel = {
    hotelName: q.hotelName || 'SampleHotel',
    roomsTotal: q.Number || 10,
    maxGuestPerRoom: q.Number || 10,
    vacancy: [ {date: q.vacancy[0].date || '', isBooked: q.vacancy[0].isBooked || true} ],
    prices: [ {serviceName: q.prices[0].serviceName || '', price: q.prices[0].price || 0} ]
  };

  db.model.create(newHotel, (err, data) => {
    console.log('QUERY SENT');
    if (err) {
      console.log('DB QUERY ERROR', err);
      res.status(400).send();
    } else {
      console.log('DB QUERY SUCCESS');
      res.status(200).send(data);
    }
  });
});

//Read
app.get('/api/crud/read', (req, res) => {
  //If no data
  if (req.body === undefined) {
    res.status(400).send('Bad Request');
  }

  let q = req.body.id;
  let parsed = parseInt(q);
  db.model.find({id: parsed})
    .then( (d)=> res.status(200).send(d))
    .catch( (e)=> res.status(400).send('Bad Read Request: ', e));
});


//Update
app.put('/api/crud/update', (req, res) => {
  //If no data
  if (req.body === undefined) {
    res.status(400).send('Bad Request');
  }

  let q = req.body.id;
  let parsed = parseInt(q);
  const name = req.body.name;
  // db.model.
  console.log('update = ', parsed, ' / ', name);
  db.model.findOneAndUpdate({id: parsed}, {hotelName: name})
    .then( ()=> res.status(200).send('Update Completed'))
    .catch( (e)=> res.status(400).send('Bad Update Request: ', e));
});

//Delete
app.delete('/api/crud/delete', (req, res) => {

  //If no data
  if (req.body === undefined) {
    res.status(400).send('Bad Request');
  }

  let q = req.body.id;
  let parsed = parseInt(q);
  db.model.deleteOne({id: parsed})
    .then( ()=> res.status(200).send('Delete Completed'))
    .catch( (e)=> res.status(400).send('Bad Delete Request: ', e));
});

const sendResponseWithUpdatedData = (data, req, res) => {
  const checkInDate = req.query.checkIn;
  const checkOutDate = req.query.checkOut;
  const guestsNumber = req.query.guestsNumber;
  const dataItem = data[0];
  let roomsNumber = req.query.roomsNumber;
  let response = true;
  let newData = [...data];
  let rej = [{'err_msg': ''}];
  let totalNights;

  if (dataItem.maxGuestPerRoom < guestsNumber) {
    roomsNumber = Math.ceil(guestsNumber / dataItem.maxGuestPerRoom);
  }

  if (dataItem.roomsTotal < roomsNumber) {
    rej[0]['err_msg'] = '<over the limit of rooms available at the property>';
    response = false;
  }

  let checkInIndex;
  let checkOutIndex;
  for (let i = 0; i < dataItem.vacancy.length; i ++) {
    if (dataItem.vacancy[i].date === checkInDate) {
      checkInIndex = i;
    }
    if (dataItem.vacancy[i].date === checkOutDate) {
      checkOutIndex = i;
    }
  }
  let timeGap = dataItem.vacancy.slice(checkInIndex, checkOutIndex);
  totalNights = timeGap.length;
  for (let j = 0; j < timeGap.length; j++) {
    if (timeGap[j].isBooked) {
      rej[0]['err_msg'] += '<your dates are not available>';
      response = false;
      break;
    }
  }
  for (let k = 0; k < newData[0].prices.length; k++) {
    newData[0].prices[k].price *= totalNights * roomsNumber;
  }

  if (response) {
    res.status(200).send(newData);
  } else {
    res.status(200).send(rej);
  }
};

app.get('/api/calendar/update/', (req, res) => {
  db.model.find({'id': req.query.id}, (err, data) => {
    if (err) {
      console.log('DB QUERY ERROR', err);
    } else {
      console.log('DB QUERY SUCCESS');
      sendResponseWithUpdatedData(data, req, res);
    }
  });
});

module.exports = app;