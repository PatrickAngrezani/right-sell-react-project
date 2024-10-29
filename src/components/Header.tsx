import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Venda Certa
        </Typography>
        {/* adicione botões de navegação aqui */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
