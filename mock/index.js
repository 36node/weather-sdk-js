const myRouter = (req, res, next) => {
  /** example */
  if (req.path === "/weather" && req.method === "GET") {
    const data = {
      text: "多云",
      code: "4",
      temperature: "34",
      date: "2019-06-28",
      text_day: "多云",
      code_day: "4",
      text_night: "多云",
      code_night: "4",
      high: "34",
      low: "27",
      precip: "",
      wind_direction: "东南",
      wind_direction_degree: "135",
      wind_speed: "10",
      wind_scale: "2",
      lastUpdated: "2019-06-28T07:37:56.877Z",
    };
    return res.json(data);
  }
  next();
};

const rewrites = {};

/**
 * mock
 *
 * @param {object} opt mock options
 * @param {number} opt.count how many pets to be generated
 */
const mock = () => ({
  /**
   * mock data
   */
  db: {
    weather: [
      {
        code: 1,
      },
    ],
  },

  /**
   * rewrite
   */
  rewrites,

  routers: [myRouter],
});

module.exports = mock;
