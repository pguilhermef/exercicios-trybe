const sum = require('./sum.js');

test('soma 4 e 5', () => {
  expect(sum(4, 5)).toEqual(9);
});

test('soma de 0 e 0', () => {
  expect(sum(0, 0)).toEqual(0);
})

// Área de testes que não entendi. 
// Questão: Por que o primeiro teste falha e o segundo não?
// https://jestjs.io/docs/expect#tothrowerror

// test('falha quando colocado uma string', () => {
//   expect((sum(4, '5'))).toThrow();
// });

// test('falha quando colocado uma string', () => {
//   expect(() => {
//     sum(4, '5');
//   }).toThrow();
// });

// Tirar dúvidas sobre isso na mentoria


test('falha quando colocado uma string', () => {
  expect(() => {
    sum(4, '5');
  }).toThrowError(new Error('parameters must be numbers'));
});

