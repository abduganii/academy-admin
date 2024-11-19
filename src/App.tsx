import { AuthorizedRoutes, UnAuthorizedRoutes } from "./router/index";

function App() {
  const isAuth = true

  return (
    <>
      {isAuth ? <AuthorizedRoutes /> : <UnAuthorizedRoutes />}
      {/* {loading ? <GlobalLoader /> : ""} */}
    </>
  );
}

export default App;
