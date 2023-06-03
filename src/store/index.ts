import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { messagesReducer } from "./reducers/messages_reducer";
import { abonentReducer } from "./reducers/abonent.reducer";
import { userReducer } from "./reducers/user.reducer";

const rootReducer = combineReducers({
  userReducer,
  messagesReducer,
  abonentReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
