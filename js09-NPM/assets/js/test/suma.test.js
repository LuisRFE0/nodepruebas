const { suma } = require("../suma");


test('Prueba de suma enteros', () => {
    expect(suma(5, 3)).toBe(8);
});



// pruebas para numero negativos 

test('Prueba de suma enteros', () => {
    expect(suma(-5, -3)).toBe(-8);
});

// Prueba de números decimales
test("Prueba de números decimales", () => {
    expect(suma(.1, .2)).toBe(.3);
    expect(suma(.1, .3)).toBe(.4);
    expect(suma(.1, .4)).toBe(.5);
    expect(suma(.1, .5)).toBe(.6);
    expect(suma(.1, .6)).toBe(.7);
    expect(suma(.1, .7)).toBe(.8);
    expect(suma(.1, .8)).toBe(.9);
    expect(suma(.1, .9)).toBe(1.0);
});