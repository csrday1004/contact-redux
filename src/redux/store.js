import { createStore } from 'redux'
import reducer from './reducer/reucer'

let store = createStore(reducer)

export default store