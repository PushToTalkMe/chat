import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { messagesReducer } from "./reducers/messages_reducer";
import { abonentReducer } from "./reducers/abonent.reducer";

const rootReducer = combineReducers({
  messagesReducer,
  abonentReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
