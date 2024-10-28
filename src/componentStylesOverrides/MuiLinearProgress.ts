import { BLUIColors } from '@brightlayer-ui/colors';
import { Components, Theme, CssVarsTheme } from '@mui/material/styles';

export default {
    styleOverrides: {
        colorPrimary: ({ theme }) => ({
            backgroundColor: BLUIColors.blue[100],
            ...theme.applyStyles('dark', {
                backgroundColor: `rgba(${theme.vars.palette.primary.dark} / 0.7)`,
            }),
        }),
        colorSecondary: ({ theme }) => ({
            backgroundColor: BLUIColors.lightBlue[100],
            ...theme.applyStyles('dark', {
                backgroundColor: `rgba(${theme.vars.palette.secondary.dark} / 0.7)`,
            }),
        }),
        dashedColorPrimary: ({ theme }) => ({
            ...theme.applyStyles('dark', {
                backgroundImage: `radial-gradient(${`rgba(${theme.vars.palette.primary.dark} / 0.5)`} 0%, ${`rgba(${theme.vars.palette.primary.dark} / 0.7)`} 16%, transparent 42%)`,
            }),
        }),
        dashedColorSecondary: ({ theme }) => ({
            ...theme.applyStyles('dark', {
                backgroundImage: `radial-gradient(${`rgba(${theme.vars.palette.secondary.dark} / 0.5)`} 0%, ${`rgba(${theme.vars.palette.secondary.dark} / 0.7)`} 16%, transparent 42%)`,
            }),
        }),
        barColorPrimary: ({ theme }) => ({
            ...theme.applyStyles('dark', {
                backgroundColor: theme.vars.palette.primary.dark,
            }),
        }),
        barColorSecondary: ({ theme }) => ({
            ...theme.applyStyles('dark', {
                backgroundColor: theme.vars.palette.secondary.dark,
            }),
        }),
    },
} as Components<Omit<Theme, 'components' | 'palette'> & CssVarsTheme>['MuiLinearProgress'];
