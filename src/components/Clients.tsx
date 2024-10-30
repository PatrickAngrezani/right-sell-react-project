import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "ravim", logo: "" },
  { name: "recrutify", logo: "" },
];

const Clients: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Nossos Clientes
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {clients.map((client, index) => (
          <Grid key={index} xs={6} sm={3} md={2}>
            <Paper elevation={3} sx={{ padding: "1rem", textAlign: "center" }}>
              <img
                src={client.logo}
                alt={client.name}
                style={{ width: "100%" }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Clients;
