import { AuthorizedRoutes, UnAuthorizedRoutes } from "./router/index";
import {  useSelector } from 'react-redux'

import { Store } from "./utils/storage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllData } from "./service/global";
import { useQuery } from "react-query";
import { HandleRole } from "./redux/role";
import { useDispatch } from 'react-redux';
import "../i18";
function App() {
  const navigate = useNavigate()
  const dispatch: any = useDispatch();
  Store.setLanguage(Store.getLang() ?? 'uz');
  const token = useSelector((state:any) => state.token.token) 
  const isAuth = token ||  Store.getToken() || false

   const {data:userMe} = useQuery('auth-me',() =>GetAllData('auth/me'), {
      enabled:  location.pathname != "/auth/login" && Boolean(isAuth)
   });
  useEffect(() => {
    // if (userMe?.data?.roles.includes('admin')) {
      Store.setRole('admin')
      dispatch(HandleRole('admin'))
    // } else if(userMe?.data?.roles.includes('manager')) {
    //   Store.setRole('manager')
    //   dispatch(HandleRole('manager'))
    // }
  },[userMe])
  
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
