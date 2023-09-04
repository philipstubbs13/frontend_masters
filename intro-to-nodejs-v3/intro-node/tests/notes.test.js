const add = (num, num2) => num + num2

test('add takes two numbers and returns a sum', () => {
    const result = add(1, 2)

    expect(result).toBe(3);
})