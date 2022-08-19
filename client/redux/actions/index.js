/////////lifes actions////////
export const addStreamer = (streamerName) => ({
  type: "ADD_STREAMER",
  payload: streamerName,
});
export const removeStreamer = (streamerName) => ({
  type: "REMOVE_STREAMER",
  payload: streamerName,
});
export const resetList = () => ({
  type: "RESET_LIST",
});
