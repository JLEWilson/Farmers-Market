export default (state = {}, action) => {
  const { day, location, hours, booth, id } = action;
  switch (action.type) {
    case 'ADD_MARKETDAY':
      return Object.assign({}, state, {
        [id]: {
          day: day,
          location: location,
          hours: hours,
          booth: booth,
          id: id
        }
      });
      default:
        return state;
  }
};