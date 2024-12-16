import { Components, Theme, CssVarsTheme } from '@mui/material/styles';
import * as BLUIColors from "@brightlayer-ui/colors";

export default {
        styleOverrides: {
            colorError: ({theme}) => ({
                ...theme.applyStyles('dark', {
                    backgroundColor: theme.vars.palette.error.dark,
                    color: BLUIColors.white[50],
                })
            }),
            colorPrimary: ({theme}) => ({
                ...theme.applyStyles('dark', {
                    backgroundColor: theme.vars.palette.primary.dark,
                    color: BLUIColors.white[50],
                })
            }),
            colorSecondary: ({theme}) => ({
                ...theme.applyStyles('dark', {
                    backgroundColor: theme.vars.palette.secondary.dark,
                    color: BLUIColors.white[50],
                })
            }),
        },
} as Components<
Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiBadge"];
