import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import './index.css'
import App from './App.tsx'
import { queryClient } from "./service/api";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
        <Provider store={store}>

          <App />
        </Provider>
          <ToastContainer />
        </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
