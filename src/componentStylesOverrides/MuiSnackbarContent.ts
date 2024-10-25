import { BLUIColors } from "@brightlayer-ui/colors";
import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            backgroundColor: BLUIColors.black[900],
            color: BLUIColors.black[50],
            "& .MuiButton-textPrimary": {
                color: BLUIColors.blue[200],
            },
            "& .MuiButton-textSecondary": {
                color: BLUIColors.lightBlue[200],
            },
            ...theme.applyStyles("dark", {
                color: BLUIColors.black[500],
                "& .MuiButton-textPrimary": {
                    color: theme.vars.palette.primary.dark,
                },
                "& .MuiButton-textSecondary": {
                    color: BLUIColors.lightBlue[500],
                },
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiSnackbarContent"];
