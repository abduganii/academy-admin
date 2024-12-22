import { AuthorizedRoutes, UnAuthorizedRoutes } from "./router/index";
import {  useSelector } from 'react-redux'

import { Store } from "./utils/storage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllData } from "./service/global";
import { useQuery } from "react-query";
function App() {
  const navigate = useNavigate()
  // const pathName = 
  Store.setLanguage(Store.getLang() ?? 'uz');
  const token = useSelector((state:any) => state.token.token) 
  const isAuth = token ||  Store.getToken() || false

   const {  data:userMe} = useQuery('auth-me',() =>GetAllData('auth/me'), {
      enabled:  location.pathname != "/auth/login"
    });
    console.log(userMe)
  useEffect(() => {
    if (!isAuth) {
      navigate("/auth/login");
    } else if (location.pathname == "/" || location.pathname == "/auth/login") {
        navigate("/books");
    }
  }, [isAuth]);
  return (
      <>
      
        {isAuth  ? <AuthorizedRoutes /> : <UnAuthorizedRoutes />}
        {/* {isLoading ? <GlobalLoader /> : ""} */}
      
      </>
  );
}

export default App;
