import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511959455865"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        backgroundColor: "#25D366",
        borderRadius: "50%",
        padding: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white", // Icon color
      }}
    >
      <WhatsAppIcon style={{ fontSize: "40px" }} />
    </a>
  );
};

export default FloatingWhatsAppButton;
