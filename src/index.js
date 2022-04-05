import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./Context/stateManage/state-context";
import { AuthProvider } from "./Context/auth/auth-context";
import { ScrollToTopProvider } from "./ScrollToTopProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StateProvider>
        <AuthProvider>
          <ScrollToTopProvider>
            <App />
          </ScrollToTopProvider>
        </AuthProvider>
      </StateProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
