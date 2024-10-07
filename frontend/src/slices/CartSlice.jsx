const intialState = {
  items: [],
};

function cartReducer(state = intialState, action) {
  switch (action.type) {
    case "cart/add":
      //   console.log("added");
      return { ...state, items: [...state.items, action.payload] };

    case "cart/remove":
      console.log("removed");
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      //   console.log("default");
      return state;
  }
}

// ACTION CREATORS

export function add(item) {
  return { type: "cart/add", payload: item };
}

export function remove(id) {
  return { type: "cart/remove", payload: id };
}

export default cartReducer;
