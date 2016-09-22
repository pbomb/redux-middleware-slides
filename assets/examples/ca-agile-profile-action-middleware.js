export default store => next => action => {
  if (window.profileAction === action.type) {
    console.profile(action.type);
    const result = next(action);
    console.profileEnd(action.type);
    return result;
  }
  return next(action);
};
