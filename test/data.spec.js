import { filterData , anotherExample } from '../src/data.js';


describe('filterData ', () => {
  it('is a function', () => {
    expect(typeof filterData ).toBe('function');
  });

  it('returns `example`', () => {
    expect(filterData()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
