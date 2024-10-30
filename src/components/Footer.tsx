import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <Typography>© 2024 Venda Certo - Todos os direitos reservados</Typography>
    </Box>
  );
}

export default Footer;
