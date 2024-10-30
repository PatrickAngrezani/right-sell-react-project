import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

const Header: React.FC = () => {
  const [anchorE1, setAnchorE1] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorE1);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE1(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorE1(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#1a1a1a", padding: "0 1rem" }}
    >
      <Toolbar>
        {/* Image and Home button*/}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          sx={{ mr: 2 }}
        >
          <HomeIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#00ff88" }}
        >
          <Box component="span" sx={{ color: "#00ff88", fontWeight: "bold" }}>
            V
          </Box>
          ENDA
          <Box component="span" sx={{ color: "#00ff88", fontWeight: "bold" }}>
            C
          </Box>
          ERTO
        </Typography>

        {/* navigation links */}
        <Button
          color="inherit"
          onClick={handleMenuOpen}
          sx={{ fontWeight: "bold", textTransform: "none", mr: 2 }}
        >
          Venda Certo
        </Button>
        <Menu
          anchorEl={anchorE1}
          open={isMenuOpen}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MenuItem onClick={handleMenuClose}>Sobre Nós</MenuItem>
          <MenuItem onClick={handleMenuClose}>Serviços</MenuItem>
          <MenuItem onClick={handleMenuClose}>Clientes</MenuItem>
        </Menu>

        <Button
          color="inherit"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            mr: 2,
            transition: "ease",
          }}
        >
          Contato
        </Button>

        {/* Search Icon */}
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
