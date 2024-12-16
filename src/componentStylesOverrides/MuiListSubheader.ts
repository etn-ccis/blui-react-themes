import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            ...theme.applyStyles("dark", {
                backgroundColor: "transparent",
            }),
        }),
    },
} as Components<Omit<Theme, "components" | "palette"> & CssVarsTheme>["MuiListSubheader"];
