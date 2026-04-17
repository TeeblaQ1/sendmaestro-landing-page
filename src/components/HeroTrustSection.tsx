import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import { TRUST } from '../content/site';

const iconMap = {
  api: ApiRoundedIcon,
  tracking: LocalShippingRoundedIcon,
  dispatch: HubRoundedIcon,
} as const;

export default function HeroTrustSection() {
  return (
    <Box
      sx={(theme) => ({
        py: { xs: 5, sm: 7 },
        background:
          theme.palette.mode === 'dark'
            ? `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.08)}, transparent)`
            : `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.05)}, transparent)`,
      })}
    >
      <Container>
        <Stack alignItems="center" spacing={1.5} sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            color="text.primary"
            textAlign="center"
            sx={{ fontWeight: 800, letterSpacing: 0.2 }}
          >
            {TRUST.title}
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {TRUST.items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Grid item xs={12} md={4} key={item.title}>
                <Card
                  variant="outlined"
                  sx={(theme) => ({
                    height: '100%',
                    borderRadius: 3,
                    borderColor:
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.primary.main, 0.35)
                        : alpha(theme.palette.primary.main, 0.25),
                    background:
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.primary.main, 0.1)
                        : alpha(theme.palette.primary.main, 0.04),
                    boxShadow:
                      theme.palette.mode === 'dark'
                        ? `0 8px 20px ${alpha(theme.palette.common.black, 0.25)}`
                        : `0 8px 20px ${alpha(theme.palette.primary.main, 0.08)}`,
                  })}
                >
                  <CardContent>
                    <Stack direction="row" spacing={1.25} alignItems="flex-start">
                      <Box
                        sx={(theme) => ({
                          width: 40,
                          height: 40,
                          borderRadius: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          border: '1px solid',
                          borderColor:
                            theme.palette.mode === 'dark'
                              ? alpha(theme.palette.primary.light, 0.45)
                              : alpha(theme.palette.primary.main, 0.3),
                          backgroundColor:
                            theme.palette.mode === 'dark'
                              ? alpha(theme.palette.primary.main, 0.28)
                              : alpha(theme.palette.primary.main, 0.15),
                        })}
                      >
                        <Icon sx={{ fontSize: 20, color: 'primary.main' }} />
                      </Box>
                      <Stack spacing={0.6}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.25 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                          {item.description}
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
