import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import BrandMark from './BrandMark';
import { SITE } from '../content/site';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      Copyright © {SITE.productName} {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        py: { xs: 6, sm: 8 },
        textAlign: 'center',
      }}
    >
      <BrandMark iconSize={22} textVariant="h6" />
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 480 }}>
        {SITE.tagline}
      </Typography>
      <Link href="#waitlist" color="primary" sx={{ fontWeight: 600 }}>
        Join the waitlist
      </Link>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          pt: 2,
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Link color="text.secondary" href="#">
          Terms
        </Link>
        <Typography display="inline" sx={{ opacity: 0.5 }}>
          ·
        </Typography>
        <Link color="text.secondary" href="#">
          Privacy
        </Link>
        <Typography display="inline" sx={{ opacity: 0.5 }}>
          ·
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}
