# Hotellooo / Calendar

> Calendar component for Hetellooo Web Application

## Related Projects

  - https://github.com/Hotellooo/calendar
  - https://github.com/Hotellooo/photos-carousel
  - https://github.com/Hotellooo/reviews
  - https://github.com/Hotellooo/about

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [ServerAPI](#Server-API)

## Usage

> run 'npm start'

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

Need to install 'MongoDB' and run the service online

In Linux( or WSL)
```sh
 sudo apt-get install mongodb
 sudo service mongodb start
```
## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```


### Seeding database

```sh
npm run db-seed
```



## Server API

### General Format for CRUD

* POST `/api/[dbName]/create`
* GET `/api/hotel/read/:id` or `/api/[dbName]/read/:hotelId`
* PATCH `/api/[dbName]/update`
* DELETE `/api/[dbName]/delete/:id`

#### list of DBs
* hotel - DB for hotel info (name, total rooms, max guest per room, etc)
* vacancy - DB for room status
* price - DB for room services

### Get info
  * GET `/api/hotel/read/:id`
  * GET `/api/vacancy/read/:hotelId`
  * GET `/api/price/read/:hotelId`

**Path Parameters:**
  * `id` hotel id
  * `hotelId` hotel id

**Success Status Code:** `200`

**Hotel - Returns:** JSON

```json
    {
      "id": "{ type: Number, unique: true }",
      "hotelName": "{type: String, minlength: 1, maxlength: 40}",
      "roomsTotal": "{type: Number, min: 1}",
      "maxGuestPerRoom": "{type: Number, min: 1}"
    }
```
**Vacancy - Returns:** JSON

```json
    {
      "id": "{ type: Number, unique: true }",
      "hotelId": "{ type: Number, required: true}",
      "date": "{ type: String, maxlength: 15 }",
      "isBooked": "{ type: Boolean, required: true }"
    }
```
**Price - Returns:** JSON

```json
    {
      "id": "{ type: Number, unique: true }",
      "hotelId": "{ type: Number, required: true }",
      "serviceName": "{ type: String, minlength: 1, maxlength: 20 }",
      "price": "{ type: Number, required: true }"
    }
```

### Add new info
  * POST `/api/hotel/create/:id`
  * POST `/api/vacancy/create/:hotelId`
  * POST `/api/price/create/:hotelId`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```
The request format should follow the same format from Get/Read API response.
```

### Update info
  * PATCH `/api/hotel/update/:id`
  * PATCH `/api/vacancy/update/:hotelId`
  * PATCH `/api/price/update/:hotelId`

**Path Parameters:**
  * `id` hotel id
  * `hotelId` hotel id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    // For hotel
    {
      "id": "Number",
      "hotelName": "{type: String, minlength: 1, maxlength: 40}"
    }

    // For Vacancy
    {
      "hotelId": "Number",
      "isBooked": "Boolean"
    }

    // For Price
    {
      "hotelId": "Number",
      "price": "Number"
    }
```

### Delete info
  * DELETE `/api/hotel/delete/:id`
  * DELETE `/api/vacancy/delete/:id`
  * DELETE `/api/price/delete/:id`

**Path Parameters:**
  * `id` hotel id / service id / price id

**Success Status Code:** `204`


