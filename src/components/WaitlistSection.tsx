import * as React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { WAITLIST, type WaitlistUserType } from '../content/site';

function waitlistEndpoint(): string | null {
  const base = process.env.REACT_APP_WAITLIST_URL?.trim();
  if (!base) return null;
  const normalized = base.replace(/\/$/, '');
  return `${normalized}/api/waitlist`;
}

function successCopy(userType: WaitlistUserType | ''): {
  title: string;
  body: string;
} {
  if (userType === 'client') {
    return {
      title: 'Client access request received',
      body: 'We will notify you as soon as client onboarding opens for early teams.',
    };
  }

  if (userType === 'partner') {
    return {
      title: 'Partner application received',
      body: 'You are in line for early partner onboarding and platform updates.',
    };
  }

  return {
    title: 'Early access request received',
    body: 'Thanks for joining the waitlist. We will reach out when access opens.',
  };
}

function UserTypeOption({
  value,
  label,
  tooltip,
  selected,
  onSelect,
}: {
  value: WaitlistUserType;
  label: string;
  tooltip?: string;
  selected: boolean;
  onSelect: (value: WaitlistUserType) => void;
}) {
  const iconByType: Record<WaitlistUserType, React.ReactNode> = {
    client: <StorefrontRoundedIcon sx={{ color: selected ? 'primary.main' : 'text.secondary' }} />,
    partner: (
      <LocalShippingRoundedIcon sx={{ color: selected ? 'primary.main' : 'text.secondary' }} />
    ),
  };

  return (
    <Paper
      variant="outlined"
      role="radio"
      aria-checked={selected}
      tabIndex={0}
      onClick={() => onSelect(value)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect(value);
        }
      }}
      sx={(theme) => ({
        p: 1.5,
        borderRadius: 2,
        cursor: 'pointer',
        transition: 'all 120ms ease-in-out',
        borderColor: selected ? 'primary.main' : 'divider',
        backgroundColor: selected
          ? theme.palette.mode === 'dark'
            ? 'rgba(82,113,255,0.16)'
            : 'rgba(82,113,255,0.08)'
          : 'background.default',
        '&:hover': {
          borderColor: 'primary.main',
        },
      })}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1.5}>
        <Stack direction="row" alignItems="center" spacing={1.25}>
          {iconByType[value]}
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography component="span" variant="body2" sx={{ fontWeight: 600 }}>
              {label}
            </Typography>
            {tooltip ? (
              <Tooltip title={tooltip} enterTouchDelay={0}>
                <span>
                  <InfoOutlinedIcon
                    sx={{
                      fontSize: 18,
                      color: 'text.secondary',
                      cursor: 'help',
                      verticalAlign: 'middle',
                    }}
                    aria-label={`More about: ${label}`}
                  />
                </span>
              </Tooltip>
            ) : null}
          </Stack>
        </Stack>
        <CheckCircleRoundedIcon sx={{ color: selected ? 'primary.main' : 'divider', fontSize: 20 }} />
      </Stack>
    </Paper>
  );
}

export default function WaitlistSection() {
  const endpoint = waitlistEndpoint();
  const [email, setEmail] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [companyName, setCompanyName] = React.useState('');
  const [userType, setUserType] = React.useState<WaitlistUserType | ''>('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const inputSx = {
    '& .MuiOutlinedInput-root': {
      minWidth: '100%',
      backgroundColor: 'background.default',
    },
  } as const;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!endpoint) return;
    if (!userType) {
      setErrorMessage('Please select how you want to use Transcit.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMessage(null);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          full_name: fullName.trim(),
          company_name: companyName.trim(),
          user_type: userType,
        }),
      });
      if (!res.ok) {
        let msg = 'Something went wrong. Please try again.';
        try {
          const data = await res.json();
          if (typeof data?.message === 'string') msg = data.message;
          else if (typeof data?.error === 'string') msg = data.error;
        } catch {
          /* ignore */
        }
        throw new Error(msg);
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Request failed.');
    }
  };

  if (status === 'success') {
    const copy = successCopy(userType);

    return (
      <Box id="waitlist" sx={{ py: { xs: 8, sm: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="sm">
          <Alert severity="success" sx={{ borderRadius: 2 }}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              {copy.title}
            </Typography>
            <Typography variant="body2">
              {copy.body} We will reach out at {email}.
            </Typography>
          </Alert>
        </Container>
      </Box>
    );
  }

  return (
    <Box id="waitlist" sx={{ py: { xs: 8, sm: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="sm">
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 2.5, sm: 4 },
            borderRadius: 3,
            borderColor: 'divider',
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="text.primary"
            gutterBottom
            textAlign="center"
          >
            {WAITLIST.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
            {WAITLIST.subtitle}
          </Typography>

          {!endpoint ? (
            <Alert severity="info" sx={{ mb: 2 }}>
              Set{' '}
              <Typography component="span" variant="body2" sx={{ fontFamily: 'monospace' }}>
                REACT_APP_WAITLIST_URL
              </Typography>{' '}
              to your API origin (no trailing path). The app will POST to{' '}
              <Typography component="span" variant="body2" sx={{ fontFamily: 'monospace' }}>
                /api/waitlist
              </Typography>
              .
            </Alert>
          ) : null}

          {status === 'error' && errorMessage ? (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errorMessage}
            </Alert>
          ) : null}

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={2.5} sx={{ maxWidth: 620, mx: 'auto' }}>
              <Stack spacing={1}>
                <Typography
                  component="label"
                  htmlFor="waitlist-email"
                  variant="body2"
                  color="text.primary"
                  sx={{ fontWeight: 600 }}
                >
                  {WAITLIST.fields.email} *
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="waitlist-email"
                  name="email"
                  type="email"
                  hiddenLabel
                  placeholder="you@company.com"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  autoComplete="email"
                  inputProps={{ 'aria-label': WAITLIST.fields.email }}
                  sx={inputSx}
                />
              </Stack>
              <Stack spacing={1}>
                <Typography
                  component="label"
                  htmlFor="waitlist-full-name"
                  variant="body2"
                  color="text.primary"
                  sx={{ fontWeight: 600 }}
                >
                  {WAITLIST.fields.fullName} *
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="waitlist-full-name"
                  name="full_name"
                  hiddenLabel
                  placeholder="Ada N."
                  value={fullName}
                  onChange={(ev) => setFullName(ev.target.value)}
                  autoComplete="name"
                  inputProps={{ 'aria-label': WAITLIST.fields.fullName }}
                  sx={inputSx}
                />
              </Stack>
              <Stack spacing={1}>
                <Typography
                  component="label"
                  htmlFor="waitlist-company"
                  variant="body2"
                  color="text.primary"
                  sx={{ fontWeight: 600 }}
                >
                  {WAITLIST.fields.companyName} *
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="waitlist-company"
                  name="company_name"
                  hiddenLabel
                  placeholder="Your company"
                  value={companyName}
                  onChange={(ev) => setCompanyName(ev.target.value)}
                  autoComplete="organization"
                  inputProps={{ 'aria-label': WAITLIST.fields.companyName }}
                  sx={inputSx}
                />
              </Stack>
              <FormControl required component="fieldset">
                <FormLabel component="legend" sx={{ mb: 1, color: 'text.primary' }}>
                  {WAITLIST.fields.userType}
                </FormLabel>
                <Stack spacing={1} role="radiogroup" aria-label={WAITLIST.fields.userType}>
                  <UserTypeOption
                    value="client"
                    label={WAITLIST.userTypes.client}
                    tooltip={WAITLIST.tooltips.client}
                    selected={userType === 'client'}
                    onSelect={setUserType}
                  />
                  <UserTypeOption
                    value="partner"
                    label={WAITLIST.userTypes.partner}
                    tooltip={WAITLIST.tooltips.partner}
                    selected={userType === 'partner'}
                    onSelect={setUserType}
                  />
                </Stack>
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={!endpoint || status === 'loading' || !userType}
                sx={{ mt: 0.5 }}
              >
                {status === 'loading' ? 'Submitting...' : WAITLIST.cta}
              </Button>
              <Typography variant="caption" color="text.secondary" textAlign="center">
                {WAITLIST.disclaimer.split('Terms')[0]}
                <Link href="#" color="primary">
                  Terms
                </Link>
                {' and '}
                <Link href="#" color="primary">
                  Privacy Policy
                </Link>
                .
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
