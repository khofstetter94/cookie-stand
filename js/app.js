let salesSection = document.getElementById('cookie-sales');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avg: 6.3,
  hourlyCookies: [],

  soldCookies: function(){
    for (let i = 0; i < hours.length; i++){
      let numberCustomer = randomCustomers(this.minCust, this.maxCust);
      this.hourlyCookies.push(Math.round(numberCustomer * this.avg));
    }
  },

  totalCookies: function(){
    let dailyTotal = 0;
    for(let i = 0; i < this.hourlyCookies.length; i++){
      dailyTotal = this.hourlyCookies[i] + dailyTotal;
    }
    return dailyTotal;
  },

  render: function(){
    let articleElem  = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hourlyCookies.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.hourlyCookies[i]}`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookies()}`;
    ulElem.appendChild(liElem);
  }
};

function randomCustomers(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.soldCookies();
seattle.render();

// temporary code
seattle.totalCookies();
// temporary code

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avg: 1.2,
  hourlyCookies: [],

  soldCookies: function(){
    for (let i = 0; i < hours.length; i++){
      let numberCustomer = randomCustomers(this.minCust, this.maxCust);
      this.hourlyCookies.push(Math.round(numberCustomer * this.avg));
    }
  },

  totalCookies: function(){
    let dailyTotal = 0;
    for(let i = 0; i < this.hourlyCookies.length; i++){
      dailyTotal = this.hourlyCookies[i] + dailyTotal;
    }
    return dailyTotal;
  },

  render: function(){
    let articleElem  = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hourlyCookies.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.hourlyCookies[i]}`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookies()}`;
    ulElem.appendChild(liElem);
  }
};

tokyo.soldCookies();
tokyo.render();

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avg: 3.7,
  hourlyCookies: [],

  soldCookies: function(){
    for (let i = 0; i < hours.length; i++){
      let numberCustomer = randomCustomers(this.minCust, this.maxCust);
      this.hourlyCookies.push(Math.round(numberCustomer * this.avg));
    }
  },

  totalCookies: function(){
    let dailyTotal = 0;
    for(let i = 0; i < this.hourlyCookies.length; i++){
      dailyTotal = this.hourlyCookies[i] + dailyTotal;
    }
    return dailyTotal;
  },

  render: function(){
    let articleElem  = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hourlyCookies.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.hourlyCookies[i]}`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookies()}`;
    ulElem.appendChild(liElem);
  }
};

dubai.soldCookies();
dubai.render();

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avg: 2.3,
  hourlyCookies: [],

  soldCookies: function(){
    for (let i = 0; i < hours.length; i++){
      let numberCustomer = randomCustomers(this.minCust, this.maxCust);
      this.hourlyCookies.push(Math.round(numberCustomer * this.avg));
    }
  },

  totalCookies: function(){
    let dailyTotal = 0;
    for(let i = 0; i < this.hourlyCookies.length; i++){
      dailyTotal = this.hourlyCookies[i] + dailyTotal;
    }
    return dailyTotal;
  },

  render: function(){
    let articleElem  = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hourlyCookies.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.hourlyCookies[i]}`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookies()}`;
    ulElem.appendChild(liElem);
  }
};

paris.soldCookies();
paris.render();

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avg: 4.6,
  hourlyCookies: [],

  soldCookies: function(){
    for (let i = 0; i < hours.length; i++){
      let numberCustomer = randomCustomers(this.minCust, this.maxCust);
      this.hourlyCookies.push(Math.round(numberCustomer * this.avg));
    }
  },

  totalCookies: function(){
    let dailyTotal = 0;
    for(let i = 0; i < this.hourlyCookies.length; i++){
      dailyTotal = this.hourlyCookies[i] + dailyTotal;
    }
    return dailyTotal;
  },

  render: function(){
    let articleElem  = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hourlyCookies.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.hourlyCookies[i]}`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookies()}`;
    ulElem.appendChild(liElem);
  }
};

lima.soldCookies();
lima.render();
