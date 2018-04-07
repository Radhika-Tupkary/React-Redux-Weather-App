import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  console.log('action received', action);
  switch(action.type) {
    case FETCH_WEATHER :
      return [action.payload.data, ...state];
      // similar to state.concat[action.payload.data] => concat returns a NEW arry, it does not mutate the orginial state array.
      // state.push([action.payload.data]) => achieves the same thing apparently, but DO NOT use push because it mutates the original state array!
      //never mutate the state inside reducers , hence here are returning a NEW instance of state.
  }
  return state;
}
