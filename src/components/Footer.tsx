import React from "react";
import { Box, Typography, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
      <Button
        href="https://www.google.com/url?q=https%3A%2F%2Fwa.me%2F%2F5511959455865%3Ftext%3DVim%2520pelo%2520site%2520%2C%2520tenho%2520interesse%2520em%2520conhecer%2520mais%2520a%2520VendaCerto&sa=D&sntz=1&usg=AOvVaw2ht1pfRew_v7VKF9hm6fdj"
        target="_blank"
        variant="contained"
        startIcon={<WhatsAppIcon />}
        sx={{
          backgroundColor: "#007f3b",
          color: "#fff",
          textTransform: "none",
          marginBottom: "1rem",
          "&:hover": {
            backgroundColor: "#005a29",
          },
        }}
      >
        Entre em contato com um de nossos especialistas
      </Button>
      <Typography sx={{ marginTop: "1 rem" }}>
        © 2019 Venda Certo - Todos os direitos reservados
      </Typography>
    </Box>
  );
}

export default Footer;
