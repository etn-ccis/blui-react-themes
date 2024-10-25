import { Components, Theme, CssVarsTheme } from "@mui/material/styles";
import * as BLUIColors from "@brightlayer-ui/colors";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            backgroundColor: theme.vars.palette.primary.main,
            ...theme.applyStyles("dark", {
                backgroundColor: BLUIColors.black[800],
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiBottomNavigation"];
