import React from "react";
import { SnackbarProvider } from "material-ui-snackbar-provider";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { Router } from "../../services/router";
import { theme } from "../../services/theme";
import { DefaultSuspense } from "../../services/import/default-suspense";

export const Root = () => {
  return (
    <React.StrictMode>
      <DefaultSuspense>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            SnackbarProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center",
              },
              autoHideDuration: 5_000,
            }}
          >
            <CssBaseline />
            <GlobalStyles
              styles={{
                a: {
                  color: "inherit",
                  textDecoration: "none",
                },
              }}
            />
            <Router />
          </SnackbarProvider>
        </ThemeProvider>
      </DefaultSuspense>
    </React.StrictMode>
  );
};
