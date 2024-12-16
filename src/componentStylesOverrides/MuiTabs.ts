import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            ...theme.applyStyles("dark", {
                color: theme.vars.palette.text.secondary,
            }),
        }),
        indicator: ({ theme }) => ({
            backgroundColor: theme.vars.palette.background.paper,
            ...theme.applyStyles("dark", {
                backgroundColor: theme.vars.palette.primary.main,
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiTabs"];
