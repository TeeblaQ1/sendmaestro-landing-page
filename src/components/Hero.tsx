import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HERO } from '../content/site';

export default function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? `linear-gradient(180deg, ${alpha('#38b6ff', 0.35)}, #fff)`
            : `linear-gradient(180deg, ${alpha('#5271ff', 0.35)}, ${theme.palette.background.default})`,
        backgroundSize: '100% 45%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 16 },
          pb: { xs: 8, sm: 11 },
        }}
      >
        <Stack spacing={2.5} useFlexGap sx={{ width: { xs: '100%', sm: '86%', md: '74%' } }}>
          <Stack alignItems="center">
            <Chip
              label={HERO.eyebrow}
              color="primary"
              sx={{
                borderRadius: '999px',
                fontWeight: 600,
                bgcolor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.primary.main, 0.2)
                    : alpha(theme.palette.primary.main, 0.1),
              }}
            />
          </Stack>
          <Typography
            variant="h1"
            textAlign="center"
            sx={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              lineHeight: 1.15,
              textAlign: 'center',
            }}
          >
            {HERO.headline}
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', maxWidth: 560 }}
          >
            {HERO.subheadline}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 1 }}
          >
            <Button variant="contained" color="primary" size="large" onClick={scrollToWaitlist}>
              {HERO.cta}
            </Button>
          </Stack>
          <Typography
            variant="body2"
            textAlign="center"
            color="text.secondary"
            sx={{ mt: 0.5, fontWeight: 500, letterSpacing: 0.2 }}
          >
            {HERO.accessTerms.join(' · ')}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
