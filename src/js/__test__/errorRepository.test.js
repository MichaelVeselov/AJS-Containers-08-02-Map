import ErrorRepository from '../errorRepository.js';

describe('class ErrorRepository should:', () => {
  test('return error from error list', () => {
    const errors = new ErrorRepository();
    expect(errors.translate(301)).toBe('Moved Permanently');
  });

  test('return error from unknown error', () => {
    const errors = new ErrorRepository();
    expect(errors.translate(502)).toBe('Unknown error');
  });
});
