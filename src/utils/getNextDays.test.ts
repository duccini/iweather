import { getNextDays } from "./getNextDays";

// Organizando os testes com Describe
describe("getNextDays", () => {
  // Cenário 1
  it("should be return the next 5 days", () => {
    const days = getNextDays();

    expect(days.length).toBe(5);
  });
});
