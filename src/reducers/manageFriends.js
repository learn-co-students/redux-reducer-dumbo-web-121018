export function manageFriends(state, action){
  switch(action.type){
    case "ADD_FRIEND":
      return {...state, friends: [...state.friends, action.friend]};
      break;
    case "REMOVE_FRIEND":
      let friends = state.friends.filter(x => x.id !== action.id)
      return { friends }
      break;
    default:
      return {friends: state.friends};
      break;
  }
}
//
// let state = {
//   friends: [
//     {
//       name: 'Avi',
//       hometown: 'NYC',
//       id: 100
//     }
//   ],
// };
//
// manageFriends(state, {
//   type: "ADD_FRIEND",
//   friend: {
//     name: 'Joe',
//     hometown: 'Boston',
//     id: 101
//   }
// })
