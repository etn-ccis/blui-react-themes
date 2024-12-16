import { Components, Theme, CssVarsTheme } from "@mui/material/styles";
import * as BLUIColors from "@brightlayer-ui/colors";
import Color from "color";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            "&:hover": {
                color: theme.vars.palette.text.primary,
                "& .MuiTableSortLabel-icon": {
                    color: theme.vars.palette.text.secondary,
                    opacity: 1,
                },
            },
            ...theme.applyStyles("dark", {
                "&:hover": {
                    color: theme.vars.palette.text.primary,
                    "& .MuiTableSortLabel-icon": {
                        color: theme.vars.palette.text.secondary,
                        opacity: 1,
                    },
                },
            }),
        }),
        icon: ({ theme }) => ({
            opacity: 1,
            color: Color(BLUIColors.gray[500]).alpha(0.12).string(),
            ...theme.applyStyles("dark", {
                opacity: 1,
                color: Color(BLUIColors.black[200]).alpha(0.24).string(),
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiTableSortLabel"];
