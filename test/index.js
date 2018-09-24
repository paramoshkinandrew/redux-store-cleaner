import { assert } from 'chai';
import { cleanStore, CLEAN } from '../src/actions';
import withStoreCleaner from '../src/with-store-cleaner';

describe('Store cleaner.', () => {

  describe('cleanStore action', () => {
    it('should return appropriate action w/o namespace', () => {
      const action = cleanStore();
      assert(typeof action === 'object', 'Action is not an object');
      assert(action.type === CLEAN, 'Wrong action type');
      assert(typeof action.namespace === 'undefined', 'Unknown namespace');
    });
    it('should return appropriate action with namespace', () => {
      const namespace = 'someNamespace';
      const action = cleanStore(namespace);
      assert(typeof action === 'object', 'Action is not an object');
      assert(action.type === CLEAN, 'Wrong action type');
      assert(action.namespace === namespace, 'Unknown namespace');
    });
  });

  describe('withStoreCleaner HOF', () => {
    const reducer = (state = {}) => state;
    const namespace = 'someNamespace';
    const state = {some: 'state'};
    const reducerWithCleaner = withStoreCleaner(reducer, namespace);

    it('should return a function', () => {
      assert(typeof withStoreCleaner(reducer, namespace) === 'function', 'Reducer is not a function');
    });
    it('should not affect store for any actions', () => {
      assert(reducerWithCleaner(state, { type: 'just-an-action' }) === state, 'Store was unpredictably changed');
    });
    it('should clean store by clean action w/o namespace', () => {
      assert(reducerWithCleaner(state, cleanStore()) !== state, 'Store was not changed');
    });
    it('should not clean store by clean action with another namespace', () => {
      assert(reducerWithCleaner(state, cleanStore('anotherNamespace')) === state, 'Store was unpredictably changed');
    });
    it('should clean store by clean action with namespace', () => {
      assert(reducerWithCleaner(state, cleanStore(namespace)) !== state, 'Store was not changed');
    });
  });

});
