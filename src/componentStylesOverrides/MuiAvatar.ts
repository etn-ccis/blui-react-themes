import { Components, CssVarsTheme, Theme } from "@mui/material/styles";

export default {
    styleOverrides: {
        colorDefault: ({ theme }) => ({
            backgroundColor: theme.vars.palette.primary.light,
            color: theme.vars.palette.primary.main,
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiAvatar"];
