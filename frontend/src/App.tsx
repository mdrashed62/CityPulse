import { Outlet } from "react-router-dom";
import { ErrorBoundary, GlobalSnackbar } from "./components";


function App() {
  return (
    <>
      <ErrorBoundary>
        <Outlet />
        <GlobalSnackbar />
      </ErrorBoundary>
    </>
  );
}

export default App;
