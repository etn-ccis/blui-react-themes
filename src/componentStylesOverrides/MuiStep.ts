import { BLUIColors } from "@brightlayer-ui/colors";
import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            "&.Mui-completed": {
                "& .MuiStepLabel-iconContainer:before": {
                    content: '""',
                    position: "absolute",
                    display: "block",
                    top: "5%",
                    right: "5%",
                    bottom: "5%",
                    left: "5%",
                    backgroundColor: theme.vars.palette.background.paper,
                    borderRadius: "50%",
                },
            },
            ...theme.applyStyles("dark", {
                "&.Mui-completed": {
                    "& .MuiStepLabel-iconContainer:before": {
                        content: '""',
                        position: "absolute",
                        display: "block",
                        top: "5%",
                        right: "5%",
                        bottom: "5%",
                        left: "5%",
                        backgroundColor: BLUIColors.white[50],
                        borderRadius: "50%",
                    },
                },
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiStep"];
