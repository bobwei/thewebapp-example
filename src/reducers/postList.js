export default function postList(state = [], action) {
  switch (action.type) {
    case 'ADD_POST':
      return [{
        text: action.text
      }, ...state];
    default:
      return state;
  }
}
