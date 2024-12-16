import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        tooltip: ({ theme }) => ({
            fontSize: "0.75rem",
            ...theme.applyStyles("dark", {
                fontSize: "0.75rem",
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiTooltip"];
