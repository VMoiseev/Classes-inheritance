import Bowman from '../Bowman';

test('Корректное создание объекта', () => {
  const received = new Bowman('Mark', 'Bowman');
  const expected = {
    name: 'Mark',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
