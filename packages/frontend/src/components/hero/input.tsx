import { Box, styled, useTheme } from "@mui/material";
import React from "react";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
  display: "flex",
  // transition: theme.transitions.create(["box-shadow"], {
  //   duration: theme.transitions.duration.short,
  // }),
  // "&:focus": {
  //   boxShadow: theme.shadows[24],
  // },
  alignItems: "center",
}));

const Input = styled("input")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.h6.fontSize,
  lineHeight: theme.typography.h6.lineHeight,
  letterSpacing: theme.typography.h6.letterSpacing,
  width: "100%",
  flexGrow: 1,
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  "&::placeholder": {
    color: theme.palette.text.secondary,
  },
}));

export interface HeroInputProps extends React.HTMLProps<HTMLInputElement> {
  icon?: React.ReactElement;
}

export const HeroInput = ({ style, as: _, icon, ...props }: HeroInputProps) => {
  const theme = useTheme();

  return (
    <Container style={style}>
      {icon &&
        React.cloneElement(icon, {
          size: 24,
          style: {
            marginRight: theme.spacing(1.5),
            color: theme.palette.text.secondary,
          },
        })}
      <Input {...props} />
    </Container>
  );
};
