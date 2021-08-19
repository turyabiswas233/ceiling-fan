// function part-1(basic) lesson 12 ==>
function smile(names, time) {
  console.log(names + ", you goes for sleeping at " + time + " 💕✌😎");
  return 90;
}
function tempCalc_C_to_F(celcius) {
  console.log(celcius * 1.8 + 32);
}

smile("turya", "'12 am'");
smile("shuvra", "'11 pm'");
smile("shourove", "'1 am'");
console.log(smile);
console.log("ভাই, মাফ কর না এক্টূ");

tempCalc_C_to_F(36.889);

// function part-2(object) lesson 12 ==>
const car = {
  name: "HERO",
  weight: "900kg",
  color: "Black",
  price: "1,50,000 BDT",
  start: () => {
    return ("Car has started");
  },
  stop: () => {
    return ("Car has stopped");
  },
};
console.log(car.start());
console.log(car.stop());
let name = 'hi turya'
console.log(name)

//ending lesson, see event.js for next
