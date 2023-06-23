export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfielledGet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.phoneContacts = action.payload;
};

export const handleFulfielledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.phoneContacts.push(action.payload);
};

export const handleFulfielledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.phoneContacts.findIndex(
    contact => contact.id === action.payload
  );
  state.phoneContacts.splice(index, 1);
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
