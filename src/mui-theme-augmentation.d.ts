// src/mui-theme-augmentation.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    active?: string;
  }

  interface SimplePaletteColorOptions {
    active?: string;
  }
}