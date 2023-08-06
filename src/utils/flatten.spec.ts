import { describe, expect, it } from 'vitest';
import { flatten } from './flatten';

type TestObject = {
  test?: boolean;
  test2?: boolean;
  test3?: {
    test4: boolean;
    test5: boolean;
  };
  test6?: {
    test7: boolean;
    test8: boolean;
    test9: {
      test10: boolean;
    };
  };
};

describe('flatten', () => {
  it('should flatten a simple object as an object', () => {
    const object = {
      test: true,
      test2: false,
    };

    expect(flatten<TestObject>(object)).toEqual({
      test: true,
      test2: false,
    });
  });

  it('should flatten a nested object as an object', () => {
    const object = {
      test: true,
      test2: false,
      test3: {
        test4: true,
        test5: true,
      },
    };

    expect(flatten<TestObject>(object)).toEqual({
      test: true,
      test2: false,
      'test3.test4': true,
      'test3.test5': true,
    });
  });

  it('should flatten a multiple nested object as an object', () => {
    const object = {
      test: true,
      test2: true,
      test3: {
        test4: true,
        test5: true,
      },
      test6: {
        test7: true,
        test8: true,
        test9: {
          test10: true,
        },
      },
    };

    expect(flatten<TestObject>(object)).toEqual({
      test: true,
      test2: true,
      'test3.test4': true,
      'test3.test5': true,
      'test6.test7': true,
      'test6.test8': true,
      'test6.test9.test10': true,
    });
  });
});
