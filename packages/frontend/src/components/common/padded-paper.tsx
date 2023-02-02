import { Paper, PaperProps } from "@mui/material";
import React from "react";

export const PaddedPaper = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & PaperProps) => {
  return (
    <Paper {...props} sx={{ padding: 2, ...props?.sx }}>
      {children}
    </Paper>
  );
};
