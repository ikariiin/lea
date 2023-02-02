import {
  Box,
  Checkbox,
  Collapse,
  FormControlLabel,
  IconButton,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(0, 1),
  margin: theme.spacing(1.5, 0),
}));

const TitleHeader = styled("header")(() => ({
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  alignItems: "center",
}));

export interface FilterProps {
  name: string;
  preExpanded?: boolean;
  params: string[];
  activeFilters: string[];
  onFilterChange: (filter: string) => void;
}

export const Filter = ({
  name,
  preExpanded,
  params,
  activeFilters,
  onFilterChange,
}: FilterProps) => {
  const [expanded, setExpanded] = React.useState(preExpanded ?? false);
  const [filters, setFilters] = React.useState<string[]>(params);

  const search = (text: string): void => {
    const filtered = params.filter((param) =>
      param.toLowerCase().includes(text.toLowerCase()),
    );
    setFilters(filtered);
  };

  return (
    <Container>
      <TitleHeader onClick={() => setExpanded((prev) => !prev)}>
        <Typography variant="subtitle1">{name}</Typography>
        <IconButton size="small">
          {expanded ? <RiSubtractFill /> : <RiAddFill />}
        </IconButton>
      </TitleHeader>
      {params.length > 5 && (
        <TextField
          label={`Search for ${name}`}
          variant="outlined"
          fullWidth
          sx={{ mb: 1 }}
          size="small"
          onChange={(e) => {
            const value = e.target.value;
            search(value);
          }}
        />
      )}
      <Collapse in={expanded}>
        {filters.map((param) => (
          <Box key={param}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={activeFilters.includes(param)}
                  onChange={() => onFilterChange(param)}
                  size="small"
                />
              }
              label={<Typography variant="body2">{param}</Typography>}
            />
          </Box>
        ))}
      </Collapse>
    </Container>
  );
};
