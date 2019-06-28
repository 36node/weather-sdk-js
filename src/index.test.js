import SDK from "./index";

const sdk = new SDK({ base: "http://localhost:3000" });

describe("## SDK weather", () => {
  it("should get weather", async () => {
    const result = await sdk.weather.getWeather();
    expect(result.body).toHaveProperty("temperature");
  });
});
