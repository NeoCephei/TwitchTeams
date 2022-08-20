const initialState = [];

const streamers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STREAMER": {
      return [...state, action.payload];
    }
    case "REMOVE_STREAMER": {
      return state.filter((i) => i !== action.payload);
    }
    case "RESET_LIST": {
      return initialState;
    }
    default:
      return state;
  }
};

export default streamers;
