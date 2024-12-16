import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            ...theme.applyStyles('light', {
                color: theme.vars.palette.action.active,
            }),
        })
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiCheckbox"];
