const userDates = {checkIn: '2020-12-10', checkOut: '2020-12-14'};

const currentHotel = [{
  "_id": 1,
  "id" : 1,
  "hotelName" : "Checking Hotel",
  "roomsTotal" : 103,
  "maxGuestPerRoom" : 2,
  "vacancy" : [
    { "date" : "2020-12-01", "isBooked" : true },
    { "date" : "2020-12-02", "isBooked" : true },
    { "date" : "2020-12-03", "isBooked" : false },
    { "date" : "2020-12-04", "isBooked" : true },
    { "date" : "2020-12-05", "isBooked" : false },
    { "date" : "2020-12-06", "isBooked" : false },
    { "date" : "2020-12-07", "isBooked" : false },
    { "date" : "2020-12-08", "isBooked" : true },
    { "date" : "2020-12-09", "isBooked" : true },
    { "date" : "2020-12-10", "isBooked" : true },
    { "date" : "2020-12-11", "isBooked" : true },
    { "date" : "2020-12-12", "isBooked" : true },
    { "date" : "2020-12-13", "isBooked" : false },
    { "date" : "2020-12-14", "isBooked" : false },
  ],
  "prices": [
		{ "serviceName" : "Hotels.com", "price" : 168 },
		{ "serviceName" : "Expedia.com", "price" : 239 },
		{ "serviceName" : "Snaptravel", "price" : 209 },
		{ "serviceName" : "Booking.com", "price" : 221 },
		{ "serviceName" : "Zenhotels", "price" : 233 },
		{ "serviceName" : "Orbitz.com", "price" : 0 },
		{ "serviceName" : "Prestigia", "price" : 186 },
		{ "serviceName" : "Priceline", "price" : 197 },
		{ "serviceName" : "eDreams", "price" : 0 },
		{ "serviceName" : "Tripadvisor", "price" : 0 }
	]
}];

const item = { "serviceName" : "Hotels.com", "price" : 168 };

module.exports = {
  currentHotel,
  userDates,
  item
}