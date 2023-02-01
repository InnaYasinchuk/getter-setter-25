"use strict";

//1

const user = {};

Object.defineProperty(user, "name", { value: "Martin", configurable: true });
Object.defineProperty(user, "age", { value: 30, configurable: true });
Object.defineProperty(user, "id", { value: 999 });


//2

const dataBase = {
  dbName: "user",
  dbType: "My SqL",
};

const configurateDB = {
  token: "123",
  password: "567",
  user: "admin",
};

Object.freeze(dataBase);
Object.seal(configurateDB);


//3

const salaries = {
  frontend: 2000,
  backend: 1500,
  design: 1000,
};

Object.defineProperty(salaries, "sum", {
  get() {
    let sum = 0;
    for (let salary in this) {
      sum += this[salary];
    }
    console.log(sum);
  },
  enumerable: false,
});

Object.defineProperty(salaries, "addSalaries", {
  set(value) {
    let salary;
    for (let i = 0; i < value.length; i++) {
      salary = value[i].split(" : ");
      this[salary[0]] = +salary[1];
    }
  },

  enumerable: false,
});

console.log(salaries);
salaries.sum;
salaries.addSalaries = ["frontend : 5000", "design : 1500", "manager : 900"];
console.log(salaries);
salaries.sum;
salaries.addSalaries = ["boss : 15000", "recruiter : 800", "frontend : 10000"];
console.log(salaries);
salaries.sum;


//4;

const useR = {
  name: "Mike",
  surname: "Davis",
  age: 25,
};

Object.defineProperty(useR, "userInfo", {
  get() {
    let result = [];

    for (const key in this) {
      result.push(`${key} : ${this[key]}`);
    }
    return result.join(', ');
  },
  enumerable: false,
});

useR.userInfo;
useR.login = "MK_18";
useR.id = "444";
console.log(useR.userInfo);
useR.profession = 'manager';
console.log(useR.userInfo);
