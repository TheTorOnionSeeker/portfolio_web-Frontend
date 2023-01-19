import { GET_CHARACTER_DETAIL } from "../actions/actions";


const initialState = {
    characterDetail: {},
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CHARACTER_DETAIL:
        return {
          ...state,
          characterDetail: action.payload,
        };
      default: 
      return state;
    }
  };
  
  export default rootReducer;