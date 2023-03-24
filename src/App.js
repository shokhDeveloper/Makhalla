import { useContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navigate, Route, Routes } from "react-router";
import { Context } from "./Context";
import { Global } from "./GlobalStyle";
import { Home } from "./Private";
import { Home as Not_Home } from "./Public";
import { ReactQueryDevtools } from "react-query/devtools";
function App() {
  const {token} = useContext(Context)
  const client = new QueryClient()
  return (
    <div className="App">
      <QueryClientProvider client={client} >
        <Routes>
          {token !== null? (
            <>
            <Route path="/*" element={<Home/>}/>
            <Route path="*" element={<Navigate replace={true} to="/"/>}/>
            </>
            ):(
              <>
              <Route path="/" element={<Not_Home/>}/>
              <Route path="*" element={<Navigate replace={true} to="/"/>}/>
              </>
          )}
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
        <Global/>
     </div>
  );
}

export default App;
