import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            color: theme.vars.palette.text.secondary,
            "&.Mui-disabled": {
                color: theme.vars.palette.action.disabled,
            },
            "&.MuiFormLabel-filled:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error)":
                {
                    color: theme.vars.palette.text.primary,
                },
            "&.Mui-error.MuiFormLabel-colorSecondary.Mui-focused": {
                color: theme.vars.palette.error.main,
            },
            ...theme.applyStyles("dark", {
                color: theme.vars.palette.text.secondary,
                "&.Mui-disabled": {
                    color: theme.vars.palette.text.disabled,
                },
                "&.MuiFormLabel-filled:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error)":
                    {
                        color: theme.vars.palette.text.primary,
                    },
                "&.Mui-error.MuiFormLabel-colorSecondary.Mui-focused": {
                    color: theme.vars.palette.error.main,
                },
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiFormLabel"];
