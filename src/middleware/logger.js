const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Action: ", action);
  // Call next will update the state.
  const returnValue = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return returnValue;
};

export default logger;
