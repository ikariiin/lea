import { Box, Chip, Paper, styled, TextField, Typography } from "@mui/material";
import React from "react";
import { Filter } from "../../components/filter";

const Container = styled(Paper)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1, 2),
  maxHeight: "calc(90vh - 82px)",
  overflowY: "auto",
  position: "sticky",
  top: `calc(82px + 5vh)`,
  minHeight: "50vh",
}));

const ChipContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  alignItems: "center",
}));

export const Sidebar = () => {
  const preExpanded = React.useRef({
    City: true,
    "Job Type": false,
    "Education Level": false,
    "Experience Level": false,
    "Wage Type": false,
  } as Record<string, boolean>);

  const filters = {
    City: ["Kolkata", "Siliguri", "Purulia", "Asansol"],
    "Job Type": ["Part Time", "Work from home"],
    "Education Level": [
      "None",
      "Primary",
      "Secondary",
      "Higher Secondary",
      "Graduate",
    ],
    "Experience Level": ["Fresher", "Experienced"],
    "Wage Type": ["Hourly", "Monthly"],
  } as Record<string, string[]>;

  const [activeFilters, setActiveFilters] = React.useState<
    Record<string, string[]>
  >({
    City: ["Kolkata"],
  });

  const filterChange = (filter: string) => {
    return (value: string) => {
      const active = activeFilters[filter] ?? [];
      if (active.includes(value)) {
        setActiveFilters({
          ...activeFilters,
          [filter]: active.filter((v) => v !== value),
        });
      } else {
        setActiveFilters({
          ...activeFilters,
          [filter]: [...active, value],
        });
      }
    };
  };

  return (
    <Container elevation={0}>
      <Typography variant="h6" gutterBottom>
        Filter and sorting
      </Typography>
      {Object.values(activeFilters).flat().length > 0 && (
        <ChipContainer>
          <Typography variant="caption" component="div">
            Active filters:{" "}
          </Typography>
          {Object.keys(activeFilters).map((filter) =>
            activeFilters[filter].map((value) => (
              <Chip
                key={value}
                label={value}
                onDelete={() => filterChange(filter)(value)}
              />
            )),
          )}
        </ChipContainer>
      )}
      <TextField
        label="Search for filters"
        variant="outlined"
        fullWidth
        sx={{ mb: 2, mt: 1 }}
        size="small"
      />
      {Object.keys(filters).map((filter) => (
        <Filter
          key={filter}
          name={filter}
          params={filters[filter]}
          activeFilters={activeFilters[filter] ?? []}
          onFilterChange={filterChange(filter)}
          preExpanded={preExpanded.current[filter]}
        />
      ))}
    </Container>
  );
};
