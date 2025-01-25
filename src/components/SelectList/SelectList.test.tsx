import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "./index";

describe("Component: SelectList", () => {
  it("should render two cities", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "São José dos Pinhais", latitude: 789, longitude: 101 },
    ];

    render(<SelectList data={data} onChange={() => {}} onPress={() => {}} />);

    const selectedCity = screen.getByText(/josé/i);
    expect(selectedCity).toBeTruthy();
  });

  it("should call onPress one time", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "São José dos Pinhais", latitude: 789, longitude: 101 },
    ];

    // onPress é uma função (fn) do Jest, ou seja, uma função mocada
    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/josé/i);
    fireEvent.press(selectedCity); // chamando a função ao selecionar a cidade

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("should be return city details selected", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "São José dos Pinhais", latitude: 789, longitude: 101 },
    ];

    const onPress = jest.fn(); // função mocada

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/josé/i);
    fireEvent.press(selectedCity); // selecionando a cidade

    expect(onPress).toHaveBeenCalledWith(data[1]);
  });

  it("not should be show options when data props is empty.", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  });
});
