import ErrorRepository from '../app';

test('Error 401', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('401');
  expect(recieved).toBe('Red Error! Smth wrong');
});

test('Error 402', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('402');
  expect(recieved).toBe('Yellow Error! Be carefull');
});

test('Error 403', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('403');
  expect(recieved).toBe('Blue Error! Do smth');
});

test('Error 404', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('404');
  expect(recieved).toBe('Orange Error! System Error');
});

test('unknown error', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('0');
  expect(recieved).toBe('Unknown error');
});
