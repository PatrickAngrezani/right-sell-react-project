import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
const segments: string[] = [
  "Tecnologia",
  "Consultoria",
  "Startup",
  "Indústria",
  "Marketing",
  "Outros",
];

const Segments: React.FC = () => {
  return (
    <Box sx={{ padding: "4rem", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Segmentos de Atuação
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {segments.map((segment, index) => (
          <Grid item key={index}>
            <Button variant="outlined">{segment}</Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Segments;
