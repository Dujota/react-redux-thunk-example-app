/* eslint-disable import/prefer-default-export */
import jsonPlaceholder from '../apis/jsonPlaceholder';


/* BAD APPROACH FOR REDUX BECAUSE IT RETURNS A PROMISE NOT AN OBJECT
    const response = await jsonPlaceholder.get('/posts');

    return {
      type: 'FETCH_POSTS',
      payload: response,
    };


  VERY COMMON ERROR :  Error: Actions must be plain objects. Use custom middleware for async actions
*/


/**
   * ANOTHER BAD APPROACH WITH NO ASYNC
   *
   * THIS WILL RETURN A PLAIN OBJECT AND NOT CRASH, BUT IT WILL NOT SET THE NEW DATA
   * SINCE IT NEEDS TO RESOLVE THE PROMISE
   * const promise = jsonPlaceholder.get('/posts);
   *
   * return {
   * type:'FETCH_POSTS',
   * payload: promise
   * }
   *
   * this does not throw an error message!!!!!
   */

/* Setup async Fetch by returning a function that has our promise
  receives the dispatch and getState fn from redux to read and write redux store data.
  we can now manually dispatch an action and update the data inside the store with this new action
 */
export const fetchPosts = () => async (dispatch) => {
  // only modifies the value of the inner function. Thunk only calls the function, it is only the outer function that we care about in the action return
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response });
};
