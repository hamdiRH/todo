export const reducer = (state = [], action) => {
  const { type, payload } = action;
  console.log(payload)
  switch (type) {
    case "ADDTODO":
      return [...state, payload];
    case "DELETETODO":
      return state.filter(el => el.id !== payload);
    case "UPDATETODO":
      return state.map(el => (el.id === payload.id ? { ...el, ...payload,request: false } : el));
    case "COMPLETE":
      return state.map(el =>
        el.id === payload ? { ...el, isComplete: !el.isComplete } : el
      );
      case "REQUEST":
        return state.map(el =>
          el.id === payload ? { ...el, request: !el.request } : el
        );
      
    default:
      return state;
  }
};
