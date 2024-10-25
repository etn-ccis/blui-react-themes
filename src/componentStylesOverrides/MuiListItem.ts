import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            color: theme.vars.palette.text.primary,
        }),
    },
} as Components<Omit<Theme, "components" | "palette"> & CssVarsTheme>["MuiListItem"];
