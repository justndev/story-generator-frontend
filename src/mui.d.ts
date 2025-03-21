import { createTheme } from '@mui/material/styles';
import { PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        salmon: Palette['primary'];
    }

    interface PaletteOptions {
        salmon?: PaletteOptions['primary'];
    }
}


