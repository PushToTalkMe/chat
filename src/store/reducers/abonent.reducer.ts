const ADD_ABONENT = "ADD_ABONENT";

interface AbonentAction {
  type: string;
  payload: {
    number: string,
    name?: string
  };
}

const abonentJson = localStorage.getItem("abonent");

const abonent = abonentJson !== null ? JSON.parse(abonentJson) : {};

export const abonentReducer = (
  state: {
    number: string,
    name?: string
  } = abonent,
  action: AbonentAction
) => {
  switch (action.type) {
    case ADD_ABONENT:
      state = {...action.payload};
      localStorage.setItem("abonent", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
