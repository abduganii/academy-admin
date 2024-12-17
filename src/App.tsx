import { AuthorizedRoutes, UnAuthorizedRoutes } from "./router/index";
import {  useSelector } from 'react-redux'

import { Store } from "./utils/storage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate()
  Store.setLanguage(Store.getLang() ?? 'uz');
  const token = useSelector((state:any) => state.token.token) 
  const isAuth = token ||  Store.getToken() || false

  useEffect(() => {
    if (!isAuth) {
      navigate("/auth/login");
    } else if (location.pathname == "/" || location.pathname == "/auth/login") {
        navigate("/books");
    }
  }, [isAuth]);
  return (
      <>
      
        {isAuth ? <AuthorizedRoutes /> : <UnAuthorizedRoutes />}
        {/* {loading ? <GlobalLoader /> : ""} */}
      
      </>
  );
}

export default App;
