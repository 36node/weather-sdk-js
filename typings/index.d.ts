export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  weather: SDK.WeatherAPI;
}

declare namespace SDK {
  export interface Options {
    base?: string;
    token?: string;
  }

  export interface WeatherAPI {
    /**
     * List weather
     */
    listWeather(req: ListWeatherRequest): Promise<ListWeatherResponse>;
    /**
     * Get weather
     */
    getWeather(req: GetWeatherRequest): Promise<GetWeatherResponse>;
  }

  type ListWeatherRequest = {
    query: {
      limit?: number;
      offset?: number;

      filter: {
        interval?: string;
        date: {
          $gt?: string;
          $lt?: string;
        };
        location?: string;
      };
    };
  };

  type ListWeatherResponse = {
    body: Array<Weather>;
    headers: {
      xTotalCount: number;
    };
  };

  type GetWeatherRequest = {
    date: string;

    query: {
      filter: {
        location?: string;
      };
    };
  };

  type GetWeatherResponse = {
    body: Array<Weather>;
  };

  type Weather = {
    text: string;
    code: string;
    temperature: number;
    humidity: number;
    lastUpdated: string;
    date: string;
    text_day: string;
    code_day: string;
    text_night: string;
    code_night: string;
    high: string;
    low: string;
    high_humidity: string;
    low_humidity: string;
    wind_direction: string;
    wind_direction_degree: string;
    wind_speed: string;
  };

  type Err = {
    code: string;
    message: string;
  };
}
