import Logo from './components/Logo.tsx'
import './App.css'
import { Container, Typography, IconButton, Stack } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";

function App() {
return (
<>
  <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
    <Container maxWidth="sm" sx={{
                textAlign: "center",
                backgroundColor: 'rgba(122, 122, 122, 0.47)',
                '&:hover': {
                  bgcolor: 'rgba(122, 122, 122, 0.78)',
                },
                p: 4,
                 borderRadius: 2
              }}>
      <Logo />
      <Typography variant="h3" fontWeight="bold" sx={{ mt: 2 }}>
        Coming Soon
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 1, mb: 3 }}>
        My website is under construction. Stay tuned!
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton color="primary" href="https://www.linkedin.com/in/michael-gal-16625ab9/">
          <LinkedIn />
        </IconButton>
      </Stack>
    </Container>
  </div>
</>
)
}

export default App
