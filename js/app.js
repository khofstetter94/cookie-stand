'use strict';

let table = document.getElementById('salesTable');

let locationForm = document.getElementById('new-form');

function randomCustomers(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let storeCities = [];

function City(name, minCust, maxCust, avg){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avg = avg;
  this.hourlyCookies = [];

  storeCities.push(this);
}

City.prototype.soldCookies = function(){
  for (let i = 0; i < hours.length; i++){
    let numberCustomer = randomCustomers(this.minCust, this.maxCust);
    this.hourlyCookies.push(Math.round(numberCustomer * this.avg));
  }
};

City.prototype.totalCookies = function(){
  let dailyTotal = 0;
  for(let i = 0; i < this.hourlyCookies.length; i++){
    dailyTotal = this.hourlyCookies[i] + dailyTotal;
  }
  return dailyTotal;
};

City.prototype.render = function(tbodyElem){
  let row1 = document.createElement('tr');
  tbodyElem.appendChild(row1);

  let thELem = document.createElement('th');
  thELem.textContent = this.name;
  row1.appendChild(thELem);

  for(let i = 0; i < this.hourlyCookies.length; i++){
    let tdElem = document.createElement('td');
    tdElem.textContent = this.hourlyCookies[i];
    row1.appendChild(tdElem);
  }

  let tdElem = document.createElement('td');
  tdElem.textContent = this.totalCookies();
  row1.appendChild(tdElem);
};

new City('Seattle', 23, 65, 6.3);
new City('Tokyo', 3, 24, 1.2);
new City('Dubai', 11, 38, 3.7);
new City('Paris', 20, 38, 2.3);
new City('Lima', 2, 16, 4.6);

function renderTableHeaders() {
  let theadElem = document.createElement('thead');
  table.appendChild(theadElem);

  let trElem = document.createElement('tr');
  theadElem.appendChild(trElem);

  let thHeadHours = document.createElement('th');
  trElem.appendChild(thHeadHours);

  for(let i = 0; i < hours.length; i++){
    let thHeadHours = document.createElement('th');
    thHeadHours.textContent = hours[i];
    trElem.appendChild(thHeadHours);
  }

  let tdElem = document.createElement('td');
  tdElem.textContent = 'Daily Location Total';
  trElem.appendChild(tdElem);
}

let tbodyElem = document.createElement('tbody');

function renderAllCities(){
  table.appendChild(tbodyElem);
  for(let i = 0; i < storeCities.length; i++){
    storeCities[i].soldCookies();
    storeCities[i].totalCookies();
    storeCities[i].render(tbodyElem);
  }

}

function renderTotalsRow() {
  let tfootElem = document.createElement('tfoot');
  tfootElem.setAttribute('id', 'tfoot');
  table.appendChild(tfootElem);

  let trFootElem = document.createElement('tr');
  tfootElem.appendChild(trFootElem);

  let thFootElem = document.createElement('th');
  thFootElem.textContent = 'Totals';
  trFootElem.appendChild(thFootElem);
  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++){
    let hourTotal = 0;
    let tdFootElem = document.createElement('td');
    trFootElem.appendChild(tdFootElem);
    for(let j = 0; j < storeCities.length; j++){
      hourTotal += storeCities[j].hourlyCookies[i];
    }
    tdFootElem.textContent = hourTotal;
    grandTotal += hourTotal;
  }
  let tdFinalElem = document.createElement('td');
  tdFinalElem.textContent = grandTotal;
  trFootElem.appendChild(tdFinalElem);
}

renderTableHeaders();
renderAllCities();
renderTotalsRow();

function handleSubmit(event){
  event.preventDefault();
  let newCityName = event.target.newCityName.value;
  let newMinCust = +event.target.newMinCust.value;
  let newMaxCust = +event.target.newMaxCust.value;
  let newCookieAvg = +event.target.newCookieAvg.value;

  let newLocation = new City(newCityName, newMinCust, newMaxCust, newCookieAvg);

  newLocation.soldCookies();
  newLocation.totalCookies();
  newLocation.render(tbodyElem);

  let tfoot = document.getElementById('tfoot');
  tfoot.parentNode.removeChild(tfoot);

  renderTotalsRow();

  locationForm.reset();
}


locationForm.addEventListener('submit', handleSubmit);
