import fetch from "@36node/fetch";
import { denormalize } from "@36node/query-normalizr";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    if (this.token) {
      return `Bearer ${this.token}`;
    }

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = {}) {
    this.base = opt.base || "";
    this.token = opt.token || "";
  }

  /**
   * weather's methods
   */
  weather = {
    /**
     * List weather
     *
     * @param {ListWeatherRequest} req listWeather request
     * @returns {Promise<ListWeatherResponse>} A paged array of weather
     */
    listWeather: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/weather`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get weather
     *
     * @param {GetWeatherRequest} req getWeather request
     * @returns {Promise<GetWeatherResponse>} Current weather of location
     */
    getWeather: (req = {}) => {
      const { date, query, headers } = req;

      if (!date) throw new Error("date is required for getWeather");

      return fetch(`${this.base}/weather/${date}`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
}
