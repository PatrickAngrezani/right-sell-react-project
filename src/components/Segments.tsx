import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const segments: string[] = [
  "TECNOLOGIA & CONSULTORIA",
  "STARTUP & INDÚSTRIA",
  "RECURSOS HUMANOS",
  "CORRETORAS & SEGURADORAS",
  "MARKETING",
  "COMPRAS & OPERAÇÕES",
];

const Segments: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "4rem",
        textAlign: "center",
        backgroundColor: "#e9ecef",
        fontFamily: "Roboto",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#007f3b", fontWeight: "bold" }}
      >
        SEGMENTOS DE ATUAÇÃO
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {segments.map((segment, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                padding: "1rem",
                fontWeight: "bold",
                color: "#333",
                border: "1px solid #ddd",
                backgroundColor: "#fff",
                textAlign: "center",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  borderColor: "#ccc",
                },
              }}
            >
              {segment}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Segments;
