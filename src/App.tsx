import { useEffect, useReducer } from "react";
import AppRouter from "./Routers/App";
import { loginContext } from './context/auth/loginContext';
import { storeLogin } from "./store/auth";
import { EAuth } from "./store/auth/enum";

function App() {

  const init = () => {
    return JSON.parse(localStorage.getItem(EAuth.login) as string) || { logged: false }
  }

  const [stateAuth, dispatch] = useReducer(storeLogin, {}, init)
  useEffect(() => {
    localStorage.setItem(EAuth.login, JSON.stringify(stateAuth))
  }, [stateAuth])

  return (
    <loginContext.Provider value={{ stateAuth, dispatch }}>
      <AppRouter />
    </loginContext.Provider>
  );
}

export default App;
