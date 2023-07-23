const person = {
  name: "Ali",
  age: 35,
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },

  set: (obj, prop, value) => {
    console.log(`changed ${prop} from ${obj[prop]} to  ${value}`);
    obj[prop] = value;
    return true;
  },
});

personProxy.name;
personProxy.age
personProxy.age = 40;
personProxy.age
