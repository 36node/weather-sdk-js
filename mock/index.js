const genWeather = require("./weather");

const myRouter = (req, res, next) => {
  next();
};

const rewrites = {};

/**
 * mock
 *
 * @param {object} opt mock options
 * @param {number} opt.count how many pets to be generated
 */
const mock = (start = new Date(), days = 20, location = "上海") => ({
  /**
   * mock data
   */
  db: {
    weather: genWeather(start, days, location),
  },

  /**
   * rewrite
   */
  rewrites,

  routers: [myRouter],
});

module.exports = mock;
