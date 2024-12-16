import { BLUIColors } from "@brightlayer-ui/colors";
import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        paper: ({ theme }) => ({
            ...theme.applyStyles("dark", {
                backgroundColor: BLUIColors.darkBlack[300],
            }),
        }),
        paperAnchorBottom: ({ theme }) => ({
            ...theme.applyStyles("dark", {
                backgroundColor: theme.vars.palette.background.paper,
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiDrawer"];
