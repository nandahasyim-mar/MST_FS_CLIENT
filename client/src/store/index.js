import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const inisialState = {
  kodePosIndonesia: []
}

function reducer(state = inisialState, action) {
  switch(action.type) {
    case 'SET_KODE':
      console.log(action.payload.kodePos, '<<<<< ini data di index store');
      return {...state, kodePosIndonesia: action.payload.kodePos}
    default: 
      return state
  }
}

let store = createStore(reducer, applyMiddleware(thunk))

export default store