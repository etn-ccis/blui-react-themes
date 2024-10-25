import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            backgroundColor: theme.vars.palette.background.paper,
            ...theme.applyStyles("dark", {
                backgroundColor: theme.vars.palette.background.paper,
            }),
        }),
        groupedHorizontal: ({ theme }) => ({
            "&:not(:first-child)": {
                marginLeft: 0,
            },
            ...theme.applyStyles("dark", {
                "&:not(:first-child)": {
                    marginLeft: 0,
                },
            }),
        }),
        groupedVertical: ({ theme }) => ({
            "&:not(:first-child)": {
                marginTop: 0,
            },
            ...theme.applyStyles("dark", {
                "&:not(:first-child)": {
                    marginTop: 0,
                },
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiToggleButtonGroup"];
