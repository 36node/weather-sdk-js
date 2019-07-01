const _ = require("lodash");
const moment = require("moment");
const faker = require("faker");

function genWeather(start, days) {
  return _.range(days).map(value => {
    const date = moment(start)
      .subtract(value, "days")
      .format("YYYY-MM-DD");
    return {
      id: date,
      text: faker.random.arrayElement(["晴", "多云", "雨", "雪"]),
      code: faker.random.number(26),
      temperature: faker.random.number({ min: 26, max: 34 }),
      date,
      text_day: faker.random.arrayElement(["晴", "多云", "雨", "雪"]),
      code_day: faker.random.number(26),
      text_night: faker.random.arrayElement(["晴", "多云", "雨", "雪"]),
      code_night: faker.random.number(26),
      high: faker.random.number(40),
      low: faker.random.number(20),
      precip: "",
      wind_direction: "东南",
      wind_direction_degree: "135",
      wind_speed: faker.random.number(20),
      wind_scale: faker.random.number(10),
      lastUpdated: faker.date.recent(),
    };
  });
}

module.exports = genWeather;

// console.log(genWeather(new Date(), 20));
