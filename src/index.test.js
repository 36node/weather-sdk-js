import moment from "moment";

import SDK from "./index";

const sdk = new SDK({ base: "http://localhost:3000" });

describe("## SDK weather", () => {
  it("should get weather", async () => {
    const result = await sdk.weather.getWeather({
      date: moment().format("YYYY-MM-DD"),
    });
    expect(result.body).toHaveProperty("temperature");
  });

  it("should get weather", async () => {
    const result = await sdk.weather.listWeather();
    expect(result.body.length).toBe(20);
  });
});
