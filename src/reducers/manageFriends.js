export function manageFriends(state, action){

  let friendJoe = { name: 'Joe', hometown: 'Boston', id: 101 }

  switch (action.type) {
    case 'ADD_FRIEND':
    // let friendJoe = Object.assign({}, state.friends, { name: 'Joe', hometown: 'Boston', id: 101 })
      return { friends: [...state.friends, friendJoe] }
    default:
      return state;

    case 'REMOVE_FRIEND':
      let toBeRemoved = state.friends.find(friend => {
        return friend.id === friendJoe.id
      })
      let newArr = state.friends.filter(friend => {
        return friend !== toBeRemoved
      })
      return { friends: newArr }
    // default:
    //   return state;
  }
}
