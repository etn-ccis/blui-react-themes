import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        colorPrimary: ({ theme }) => ({
            ...theme.applyStyles("dark", {
                color: theme.vars.palette.primary.dark,
            }),
        }),
        colorSecondary: ({ theme }) => ({
            ...theme.applyStyles("dark", {
                color: theme.vars.palette.secondary.dark,
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiCircularProgress"];
