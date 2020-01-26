# Shop

## Description

Shop application build with:
* Angular
* NGRX
* Angular Material
* ngx-pagination
* Expressjs
* MongoDB Atlas (Mongoose)
* jsonwebtoken
* node.bcrypt.js

Actions that can be made:
* user registration
* add/remove/update the cart;
* filter the products;
* sorting the products;
* searching products - under development
* view user profile (order history / change password, address) - under development


__Screenshot__

![alt text](https://raw.githubusercontent.com/AndreiGolopenta/shop/master/front-end/src/assets/screenshots/img1.png)
![alt text](https://raw.githubusercontent.com/AndreiGolopenta/shop/master/front-end/src/assets/screenshots/img2.png)

## Requirements

* MongoDB Atlas free account;

### MongoDB

* create a cluster;
* from cluster -> connect -> connect your application - copy the connection string and replace <password> with the password for the admin user
* paste the string in back-end/app.js 
```js
mongoose.connect(
  'connection string',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
```
* upload db.json file (this can be done easily with postman, route http://localhost:3000/products method POST and set body-raw-json with dates from the db.json)

## Project Dependencies
Install both back-end and fron-end with:
`npm install`

## Running the project
```cli
cd back-end
npm start
```
```cli
cd front-end
npm start
```


