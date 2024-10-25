import { BLUIColors } from "@brightlayer-ui/colors";
import { Components, Theme, CssVarsTheme } from "@mui/material/styles";
import Color from "color";

export default{
        styleOverrides: {
            root: ({theme}) => ({
                backgroundColor: theme.vars.palette.background.paper,
                    // color: theme.vars.palette.text.hint, // commenting to check if hint is available or not
                    color: theme.vars.palette.text.primary, // remove if comment above is uncommented
                    borderColor: BLUIColors.gray[100],
                    "&:hover": {
                        backgroundColor: Color(BLUIColors.black[500])
                            .alpha(0.05)
                            .string(),
                    },
                    "&.Mui-selected": {
                        backgroundColor: theme.vars.palette.primary.light,
                        color: theme.vars.palette.primary.main,
                        "&:hover": {
                            backgroundColor: BLUIColors.blue[100],
                        },
                    },
                ...theme.applyStyles('dark', {
                    backgroundColor: theme.vars.palette.background.paper,
                    color: BLUIColors.gray[500],
                    borderColor: Color(BLUIColors.black[200]).alpha(0.32).string(),
                    "&.Mui-selected": {
                        backgroundColor: `rgba(${theme.vars.palette.primary.dark} / 0.36)`,
                        color: theme.vars.palette.primary.main,
                        "&:hover": {
                            backgroundColor: `rgba(${theme.vars.palette.primary.main} / 0.36)`,
                        },
                    },
                    "&:hover": {
                        backgroundColor: theme.vars.palette.action.hover,
                    },
                    "&.Mui-disabled": {
                        color: theme.vars.palette.action.disabled,
                    },
                })
            }),
    }
} as Components<
Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiToggleButton"];
