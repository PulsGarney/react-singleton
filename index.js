import _syncWrapper from './src/SyncState';
import umdSyncWrapper from './lib/sync.umd';


const compose = (...fn) => {
  if (fn.length === 0) return arg => arg;
  if (fn.length === 1) return fn[0];
  return fn.reduce((a, b) => (...args) => a(b(...args)));
};


export default _syncWrapper;

export {
  compose,
  umdSyncWrapper as syncWrapper,
};
