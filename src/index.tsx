import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import GlobalStyle from "./globalStyle/globalStyle";

import { store } from "./reduxStore/main/mainStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
