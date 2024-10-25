import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            ...theme.applyStyles("dark", {
                borderBottom: `1px solid ${theme.vars.palette.divider}`,
            }),
        }),
        head: ({ theme }) => ({
            fontWeight: 600,
            ...theme.applyStyles("dark", {
                fontWeight: 600,
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiTableCell"];
