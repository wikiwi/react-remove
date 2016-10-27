# react-remove

Removes elements from DOM on mount.

[![NPM Version Widget]][npm version]
[![Build Status Widget]][build status]
[![Coverage Status Widget]][coverage status]

## Installation

```sh
npm install react-remove --save
```

## Usage

```javascript
import { Remove } from "react-remove"

const App = () => (
  <div>
    <Remove id="element-id" />
    <Remove id={["id1", "id2"]} />
  </diV>
)

ReactDOM.render(<App />, mountNode)
```

[npm version]: https://www.npmjs.com/package/react-remove

[npm version widget]: https://img.shields.io/npm/v/react-remove.svg?style=flat-square

[build status]: https://travis-ci.org/wikiwi/react-remove

[build status widget]: https://img.shields.io/travis/wikiwi/react-remove/master.svg?style=flat-square

[coverage status]: https://coveralls.io/github/wikiwi/react-remove?branch=master

[coverage status widget]: https://img.shields.io/coveralls/wikiwi/react-remove/master.svg?style=flat-square

