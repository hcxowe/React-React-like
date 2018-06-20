require('es5-polyfill')

import Nerv from 'nervjs'
import Hello from './Hello.js'

Nerv.render(<Hello/>, document.getElementById('app'))