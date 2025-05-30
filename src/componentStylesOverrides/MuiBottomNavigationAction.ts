import { Components, Theme, CssVarsTheme } from "@mui/material/styles";
import * as BLUIColors from "@brightlayer-ui/colors";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            color: BLUIColors.blue[200],
            "&.Mui-selected": {
                color: BLUIColors.white[50],
                "& .MuiBottomNavigationAction-label": {
                    fontSize: "0.75rem",
                    fontWeight: 600,
                },
            },
            ...theme.applyStyles("dark", {
                "&.Mui-selected": {
                    color: BLUIColors.blue[200],
                    "& .MuiBottomNavigationAction-label": {
                        fontSize: "0.75rem",
                        fontWeight: 600,
                    },
                },
                "&:not(.Mui-selected)": {
                    color: BLUIColors.black[200],
                    "& .MuiBottomNavigationAction-label": {
                        color: BLUIColors.black[50],
                    },
                },
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiBottomNavigationAction"];
