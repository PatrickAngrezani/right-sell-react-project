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
import HomeIcon from "@mui/icons-material/Home";
import { colors } from "../colors.tsx";
import { useLocation, useNavigate } from "react-router-dom";

type HeaderProps = {
  setScrollTarget: React.Dispatch<React.SetStateAction<string | null>>;
};

const Header: React.FC<HeaderProps> = ({ setScrollTarget }) => {
  const [anchorE1, setAnchorE1] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorE1);

  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE1(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorE1(null);
  };

  const goToHome = () => {
    navigate("/");
  };

  const handleNavigation = (section: string) => {
    if (location.pathname !== "/") {
      setScrollTarget(section);
      navigate("/");
    } else {
      setScrollTarget(section);
    }
    handleMenuClose();
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#1a1a1a", padding: "0 1rem" }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          sx={{
            mr: 2,
            "&:hover": {
              backgroundColor: colors.darkGrayBackground,
            },
          }}
          onClick={goToHome}
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

        <Button
          color="inherit"
          onClick={handleMenuOpen}
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            mr: 2,
            "&:hover": {
              backgroundColor: colors.darkGrayBackground,
            },
          }}
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
          <MenuItem onClick={() => handleNavigation("about")}>
            Sobre Nós
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("services")}>
            Serviços
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("clients")}>
            Clientes
          </MenuItem>
        </Menu>

        <Button
          href="https://www.google.com/url?q=https%3A%2F%2Fwa.me%2F%2F5511959455865%3Ftext%3DVim%2520pelo%2520site%2520%2C%2520tenho%2520interesse%2520em%2520conhecer%2520mais%2520a%2520VendaCerto&sa=D&sntz=1&usg=AOvVaw2ht1pfRew_v7VKF9hm6fdj"
          target="_blank"
          color="inherit"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            mr: 2,
            transition: "ease",
            "&:hover": {
              backgroundColor: colors.darkGrayBackground,
            },
          }}
        >
          Contato
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
