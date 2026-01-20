import { Snackbar, Alert } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { closeSnackbar } from "../redux/features/snackbar/snackbarSlice";

export const GlobalSnackbar = () => {
  const { open, message, severity } = useAppSelector((state) => state.snackbar);
  const dispatch = useAppDispatch();

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ): void  => {
    if (reason === "clickaway") return;
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
