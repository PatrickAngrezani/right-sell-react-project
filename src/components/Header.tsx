import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
  Popover,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { colors } from "../colors.tsx";
import { useLocation, useNavigate } from "react-router-dom";

type HeaderProps = {
  setScrollTarget: React.Dispatch<React.SetStateAction<string | null>>;
};

const Header: React.FC<HeaderProps> = ({ setScrollTarget }) => {
  const [anchorE1, setAnchorE1] = React.useState<null | HTMLElement>(null);
  const [missionAnchorEl, setMissionAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const isMenuOpen = Boolean(anchorE1);

  const navigate = useNavigate();
  const location = useLocation();

  const handleMissionButton = (event: React.MouseEvent<HTMLElement>) => {
    setMissionAnchorEl(missionAnchorEl ? null : event.currentTarget);
  };

  const isMissionMenuOpen = Boolean(missionAnchorEl);
  const id = isMissionMenuOpen ? "mission-popover" : undefined;

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
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
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
            sx={{ color: "#00ff88", fontWeight: "bold" }}
          >
            <Box component="span" sx={{ color: "#00ff88" }}>
              V
            </Box>
            ENDA{" "}
            <Box component="span" sx={{ color: "#00ff88" }}>
              C
            </Box>
            ERTO
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <Button
            color="inherit"
            onClick={handleMissionButton}
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              mx: 2,
              "&:hover": {
                backgroundColor: colors.darkGrayBackground,
              },
            }}
          >
            Missão
          </Button>
          <Popover
            id={id}
            open={isMissionMenuOpen}
            anchorEl={missionAnchorEl}
            onClose={() => setMissionAnchorEl(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            sx={{
              ".MuiPaper-root": {
                backgroundColor: colors.darkGrayBackground,
                color: "#ffffff",
                padding: 2,
                maxWidth: 450,
                maxHeight: 500,
              },
            }}
          >
            <Box p={2} sx={{ maxWidth: 300 }}>
              <Typography variant="h6" gutterBottom>
                Missão
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "justify" }}>
                Conectar empresas aos melhores talentos comerciais, oferecendo
                soluções completas e personalizadas que impulsionem o
                crescimento, otimizem o funil de vendas e garantam uma
                experiência excepcional em cada etapa do processo comercial.
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
                Visão
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "justify" }}>
                Ser a referência nacional em BPO comercial completo, liderando o
                mercado com inovação, excelência e confiabilidade, e
                transformando a forma como empresas conduzem suas operações de
                vendas e relacionamento com clientes.
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
                Valores
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "justify" }}>
                <strong>Excelência</strong>: Compromisso em entregar serviços de
                alta qualidade e superar as expectativas dos nossos clientes.
                <br />
                <br />
                <strong>Inovação</strong>: Buscar constantemente novas
                estratégias e soluções para otimizar o funil comercial.
                <br />
                <br />
                <strong>Transparência</strong>: Trabalhar de forma ética e
                clara, mantendo uma comunicação aberta com clientes e
                colaboradores.
                <br />
                <br />
                <strong>Foco no Cliente</strong>: Priorizar as necessidades dos
                clientes e construir relações de confiança para garantir seu
                sucesso.
                <br />
                <br />
                <strong>Colaboração</strong>: Valorizar o trabalho em equipe e o
                compartilhamento de conhecimento para alcançar resultados
                excepcionais juntos.
              </Typography>
            </Box>
          </Popover>

          <Button
            color="inherit"
            onClick={handleMenuOpen}
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              mx: 2,
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
