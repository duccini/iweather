import { useCity } from "@hooks/useCity";
import { act, renderHook, waitFor } from "@testing-library/react-native";
import { CityProvider } from "./CityContext";

describe("Context: CityContext", () => {
  it("should be change selected city", async () => {
    // renderiza o context e envolve o provider
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

    // quando a aplicação tem atualização de estado assíncrono
    // waitFor aguardar a atualização assincrona e act para lidar com a atualização
    await waitFor(() => act(() => console.log(result.current)));
  });
});
