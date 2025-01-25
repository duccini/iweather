import { CityProps } from "@services/getCityByNameService";
import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "./cityStorage";

describe("Storage: CityStorage", () => {
  const newCity: CityProps = {
    id: "1",
    name: "Vinhedo",
    latitude: 123,
    longitude: 456,
  };

  it("should be return null when don't have a city storage", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });

  it("should be return city storage", async () => {
    const newCity: CityProps = {
      id: "1",
      name: "Vinhedo",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(newCity);
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it("should be remove city storaged", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();
    const response = await getStorageCity();

    expect(response).toBeNull();
  });
});
