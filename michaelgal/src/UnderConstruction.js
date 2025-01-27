import React from "react";

import { Box, Container, Typography, Button, IconButton, Stack } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { ThemeProvider } from '@mui/material/styles';
import Logo from './components/Logo';
import GradientBackground from './components/Background';

export default function UnderConstruction() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <GradientBackground />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

      <Container maxWidth="sm"
              sx={{
                textAlign: "center",
                backgroundColor: 'rgba(255, 255, 255, 2)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                },
                p: 4,
                 borderRadius: 2
              }}
    //    sx={{ textAlign: "center", backgroundColor: "rgba(255, 255, 255, 0.8)", p: 4, borderRadius: 2 }}
       >
        {/* <img 
          src="https://placehold.co/150?text=Michael+Gal&font=font=playfair-display" 
          alt="Logo"
          width={150}
          height={100}
          style={{ marginBottom: "20px" }}
        /> */}
        <Logo/>
        <Typography variant="h3" fontWeight="bold" sx={{ mt: 2 }}>
          Coming Soon
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1, mb: 3 }}>
          My website is under construction. Stay tuned!
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton color="primary" href="#">
            <Facebook />
          </IconButton>
          <IconButton color="primary" href="#">
            <Twitter />
          </IconButton>
          <IconButton color="primary" href="#">
            <Instagram />
          </IconButton>
        </Stack>
      </Container>
    </div>
        </div>

  );
}
