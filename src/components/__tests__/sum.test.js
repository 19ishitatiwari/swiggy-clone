import { sum } from "../sum";

test("Sum function should calculate correct sum", () => {
    const result = sum(2, 3);

    expect(result).toBe(5);
});