import { CLEAN } from './actions';

/**
 * Store cleaner HOF.
 * @param {Function} reducer - namespace to be cleaned
 * @param {string} namespace - namespace
 * @returns {Function}
 */
export const withStoreCleaner = (reducer, namespace) =>
  (state, action) => {
    switch (action.type) {
      case CLEAN: {
        if (!action.namespace || action.namespace === namespace) {
          return reducer(undefined, action);
        }
        return reducer(state, action);
      }
      default:
        return reducer(state, action);
    }
  };
