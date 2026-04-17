import * as React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { ABOUT, AUDIENCE, FEATURES, HOW_IT_WORKS, PROBLEM, SOLUTION } from '../content/site';

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 0, listStyle: 'none' }}>
      {items.map((text) => (
        <Stack
          key={text}
          component="li"
          direction="row"
          spacing={1.5}
          alignItems="flex-start"
        >
          <CheckRoundedIcon
            sx={{ fontSize: 20, color: 'primary.main', mt: 0.25, flexShrink: 0 }}
            aria-hidden
          />
          <Typography variant="body1" color="text.primary">
            {text}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <Chip
      label={text}
      color="primary"
      variant="outlined"
      sx={{ borderRadius: '999px', mb: 2, fontWeight: 600 }}
    />
  );
}

export default function MarketingSections() {
  return (
    <Box id="product" component="main">
      <Container sx={{ py: { xs: 6, sm: 10 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <SectionLabel text="The problem" />
            <Typography component="h2" variant="h4" color="text.primary" gutterBottom>
              {PROBLEM.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
              {PROBLEM.subtitle}
            </Typography>
            <BulletList items={PROBLEM.items} />
          </Grid>
          <Grid item xs={12} md={6}>
            <SectionLabel text="The solution" />
            <Typography component="h2" variant="h4" color="text.primary" gutterBottom>
              {SOLUTION.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
              {SOLUTION.subtitle}
            </Typography>
            <BulletList items={SOLUTION.items} />
          </Grid>
        </Grid>
      </Container>

      <Box id="how-it-works" sx={{ bgcolor: 'background.paper', py: { xs: 6, sm: 10 } }}>
        <Container>
          <SectionLabel text="How it works" />
          <Typography component="h2" variant="h4" color="text.primary" gutterBottom>
            {HOW_IT_WORKS.title}
          </Typography>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {HOW_IT_WORKS.steps.map((step, index) => (
              <Grid item xs={12} md={4} key={step.title}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography
                      variant="overline"
                      color="primary"
                      sx={{ fontWeight: 700, letterSpacing: 1 }}
                    >
                      Step {index + 1}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container id="about" sx={{ py: { xs: 6, sm: 10 } }}>
        <SectionLabel text="Audience" />
        <Typography component="h2" variant="h4" color="text.primary" gutterBottom>
          {AUDIENCE.title}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 0 }}>
          {AUDIENCE.groups.map((group) => (
            <Grid item xs={12} md={6} key={group.title}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {group.title}
                  </Typography>
                  <BulletList items={group.benefits} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', py: { xs: 6, sm: 10 } }}>
        <Container>
          <SectionLabel text="Platform" />
          <Typography component="h2" variant="h4" color="text.primary" gutterBottom>
            {FEATURES.title}
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {FEATURES.items.map((item) => (
              <Grid item xs={12} sm={6} key={item.title}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container sx={{ py: { xs: 6, sm: 10 } }}>
        <Box sx={{ textAlign: 'center' }}>
          <SectionLabel text="About Transcit" />
        </Box>
        <Typography component="h2" variant="h4" color="text.primary" textAlign="center" gutterBottom>
          {ABOUT.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ maxWidth: 720, mx: 'auto' }}
        >
          {ABOUT.body}
        </Typography>
      </Container>
    </Box>
  );
}
