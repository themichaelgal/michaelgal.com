import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{ background: "transparent", boxShadow: "none", padding: "10px" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
          Sabe
        </Typography>
        <Typography variant="body2" sx={{ color: "white", margin: "0 10px" }}>
          Home
        </Typography>
        <Typography variant="body2" sx={{ color: "white", margin: "0 10px" }}>
          About
        </Typography>
        <Typography variant="body2" sx={{ color: "white", margin: "0 10px" }}>
          Contact
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
