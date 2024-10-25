import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        label: ({ theme }) => ({
            color: theme.vars.palette.text.primary,
            "&.Mui-active": {
                fontWeight: 600,
                color: theme.vars.palette.primary.main,
            },
            "&.Mui-completed": {
                fontWeight: 600,
            },

            ...theme.applyStyles("dark", {
                color: theme.vars.palette.text.secondary,
                "&.Mui-active": {
                    fontWeight: 600,
                    color: theme.vars.palette.primary.main,
                },
                "&.Mui-completed": {
                    color: theme.vars.palette.text.secondary,
                    fontWeight: 600,
                },
            }),
        }),
        iconContainer: ({ theme }) => ({
            position: "relative",
            ...theme.applyStyles("dark", {
                position: "relative",
                paddingRight: 0,
                marginRight: 8,
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiStepLabel"];
