import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/Hero';
import HeroTrustSection from '../components/HeroTrustSection';
import MarketingSections from '../components/MarketingSections';
import WaitlistSection from '../components/WaitlistSection';
import Footer from '../components/Footer';
import getLPTheme from './getLPTheme';
import { SITE } from '../content/site';

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const LPtheme = createTheme(getLPTheme(mode));

  React.useEffect(() => {
    const previousTitle = document.title;
    document.title = `${SITE.productName} — ${SITE.tagline}`;

    const descriptionContent = SITE.metaDescription;
    let metaDescription = document.querySelector('meta[name="description"]');
    let created = false;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
      created = true;
    }

    const previousDescription = metaDescription.getAttribute('content');
    metaDescription.setAttribute('content', descriptionContent);

    return () => {
      document.title = previousTitle;
      if (metaDescription) {
        if (previousDescription !== null) {
          metaDescription.setAttribute('content', previousDescription);
        } else if (created) {
          metaDescription.remove();
        } else {
          metaDescription.removeAttribute('content');
        }
      }
    };
  }, []);

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <HeroTrustSection />
        <Divider />
        <MarketingSections />
        <Divider />
        <WaitlistSection />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
