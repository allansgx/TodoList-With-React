import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#0E202E',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg" sx={{ padding: '20px' }}>
        <Grid container>
          {/* <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Criado por Allan da Silva Gomes.
            </Typography>
          </Grid> */}
            <Grid
                item xs={12}
                container
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
            >
            <Typography variant="body2">
              Created by Allan da Silva Gomes.
            </Typography>
            <Box mt={2}>
                <Link href="https://github.com/allansgx" color="inherit" target="_blank">
                    <GitHub />
                </Link>
                <Link
                    href="https://www.instagram.com/allan_gomes7/"
                    color="inherit"
                    target="_blank"
                    sx={{ pl: 1, pr: 1 }}
                >
                    <Instagram />
                </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" align="center">
            Copyright © 2023.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}