import { Outlet } from "react-router-dom";
import { ErrorBoundary, GlobalSnackbar } from "./components";
import { AppBar, Button, Typography } from "@mui/material";

function App() {
  return (
    <>
      <ErrorBoundary>
        <AppBar position="static"></AppBar>
        <Outlet />
        <Typography variant="h1" color="primary">
          University Bus Tracker
        </Typography>
        <Button variant="contained" color="secondary">
          Track My Bus
        </Button>
        <GlobalSnackbar />
      </ErrorBoundary>
    </>
  );
}

export default App;
