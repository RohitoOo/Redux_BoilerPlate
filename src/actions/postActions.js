import { FETCH_POSTS , NEW_POST } from './types'

export const fetchPosts = () => dispatch => {
console.log('fetching');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(console.log('mounted'))
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
     })
   );

};

//Data coming in to the Reducer ( Payload )
