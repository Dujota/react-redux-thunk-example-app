import { combineReducers } from 'redux';


// Reducers
import postsReducer from './postsReducer';


// We create our reducers in a different file and import them here into the combine reducers by passing an object tha maps {storeStateName: Reducer-Imported }

export default combineReducers({ posts: postsReducer });


/**
 * @first_load_dummy_reducer_return
 *
 * export default combineReducers({ replace_me: () => 'replace_me_later' });
 */
