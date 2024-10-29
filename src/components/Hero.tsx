import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "4ram",
        textAlign: "center",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Prospecção e BPO Comercial
      </Typography>
      <Typography variant="body1">
        A Venda Certo nasceu em 2019 para conectar os melhores profissionais
        (LDR, SDR, BDR, Closer, CRM, Marketing, Copywriter e Customer Success)
        do mercado às empresas e realizar o funil comercial de ponta a ponta.
        Somos o primeiro “full” BPO comercial do mercado brasileiro.
      </Typography>
      <Button variant="contained" color="secondary" sx={{ marginTop: "2rem" }}>
        Saiba Mais
      </Button>
    </Box>
  );
};

export default Hero;
