/**
 * Reducers are pure functions so they should never reach out of the reducer, but rather just use the values from the input arguments
  *
  * Don't have to worry about mutating primitives, but we do need to make sure that we only return a new piece of state derived from the previous state */
export default (state = [], action) => {
  // Basically whats happening but usually written in a switch
  // if (action.type === 'FETCH_POSTS') {
  //   return action.payload;
  // }

  // return state;

  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};
