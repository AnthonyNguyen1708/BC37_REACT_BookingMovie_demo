import action from "./type";
import produce from "immer";

const initialState = {
  banners: [],
  movies: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case action.SET_BANNER:
      state.banners = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;

// import action from "./type";
// import produce from "immer";

// const initialState = {
//   banners: [],
// };

// const reducer = (state = initialState, { type, payload }) => {
//   produce(state, draft => {
//     console.log(draft);
//     switch (type) {
//       case action.SET_BANNER:
//         draft.banners = payload;
//         break;

//       default:
//         break;
//     }
//   });
// };

// export default reducer;
