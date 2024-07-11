import { showName, User } from '.';

describe('GET /', () => {
  it('should return correct name!', async () => {
    const name = showName(new User('John', 'Doe'));
    expect(name).toBe('Hello, John Doe!');
  });
});