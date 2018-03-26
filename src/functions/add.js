export default (state, items, payload) => {
  state[items].push(payload);
  localStorage.setItem(items, JSON.stringify(state[items]));
};
