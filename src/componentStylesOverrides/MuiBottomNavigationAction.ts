import { Components, Theme, CssVarsTheme } from '@mui/material/styles';
import * as BLUIColors from "@brightlayer-ui/colors";

export default {
        styleOverrides: {
            root: ({theme}) => ({
                color: BLUIColors.blue[200],
                    "&.Mui-selected": {
                        color: BLUIColors.white[50],
                        "& .MuiBottomNavigationAction-label": {
                            fontSize: "0.75rem",
                            fontWeight: 600,
                        },
                    },
                ...theme.applyStyles('dark', {
                    "&.Mui-selected": {
                        "& .MuiBottomNavigationAction-label": {
                            fontSize: "0.75rem",
                            fontWeight: 600,
                        },
                    },
                    "&:not(.Mui-selected) .MuiBottomNavigationAction-label": {
                        color: theme.vars.palette.text.primary,
                    },
                })
            }),
        },
} as Components<
Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiBottomNavigationAction"];


