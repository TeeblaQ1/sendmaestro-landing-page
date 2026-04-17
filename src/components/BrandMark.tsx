import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface BrandMarkProps {
  compact?: boolean;
  iconSize?: number;
  textVariant?: 'subtitle1' | 'h6' | 'h5';
}

export default function BrandMark({
  compact = false,
  iconSize,
  textVariant,
}: BrandMarkProps) {
  const theme = useTheme();
  const resolvedIconSize = iconSize ?? (compact ? 20 : 24);
  const resolvedTextVariant = textVariant ?? (compact ? 'subtitle1' : 'h6');
  const publicUrl = process.env.PUBLIC_URL ?? '';

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: compact ? 1 : 1.25 }}>
      <Box
        component="img"
        src={`${publicUrl}/assets/transcit-icon.png`}
        alt=""
        aria-hidden
        sx={{ width: resolvedIconSize, height: resolvedIconSize, objectFit: 'contain' }}
      />
      <Typography
        variant={resolvedTextVariant}
        sx={{
          fontWeight: 700,
          letterSpacing: compact ? 0.2 : 0.3,
          textTransform: 'lowercase',
          lineHeight: 1,
          color: theme.palette.mode === 'light' ? '#111827' : '#FFFFFF',
        }}
      >
        transcit
      </Typography>
    </Box>
  );
}
