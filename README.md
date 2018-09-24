# redux-state-cleaner

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Easily reset your reducers to the initial state with only one action** 

# Installation
```
npm i redux-store-cleaner -S
```

# Features

* Reset store branches by sending 'undefined' in its reducers
* Clean specific reducer with namespace

# Usage

Wrap your reducer with `withStoreCleaner` function
```javascript
import withStoreCleaner from 'redux-store-cleaner';

const someFancyReducer = (state, action) => { /* Impl */ };

export default withStoreCleaner(someFancyReducer, 'someFancyReducerNamespace');
```

and call cleanStore wherever you want

```javascript
import { cleanStore } from 'redux-store-cleaner';
import { store } from './store';

store.dispatch(cleanStore('someFancyReducerNamespace'));
// You can also clean all stores with omitting namespace
// store.dispatch(cleanStore('));
```

# License

MIT © Andrew Paramoshkin
