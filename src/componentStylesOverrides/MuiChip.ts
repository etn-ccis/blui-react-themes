import { Components, Theme, CssVarsTheme } from "@mui/material/styles";
import * as BLUIColors from "@brightlayer-ui/colors";
import Color from "color";

const WhiteText = BLUIColors.white[50];
const Spacing = 8;
const BlackBorder = BLUIColors.black[500];

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            fontSize: "0.875rem",
            backgroundColor: BLUIColors.white[500],
            color: theme.vars.palette.text.primary,
            "& .MuiChip-avatar": {
                backgroundColor: theme.vars.palette.primary.main,
                color: BLUIColors.white[50],
                marginRight: -4,
            },
            "& .MuiChip-avatarColorPrimary": {
                backgroundColor: theme.vars.palette.primary.light,
                color: theme.vars.palette.primary.main,
            },
            "& .MuiChip-avatarColorSecondary": {
                backgroundColor: theme.vars.palette.primary.light,
                color: theme.vars.palette.primary.main,
            },
            "&.Mui-disabled": {
                opacity: 1,
                color: `rgba(${theme.vars.palette.text.primary} / 0.3)`,
                "& .MuiChip-avatar": {
                    opacity: 0.5,
                },
                "&:not(.MuiChip-colorPrimary):not(.MuiChip-colorSecondary) .MuiChip-deleteIcon":
                    {
                        color: theme.vars.palette.action.disabled,
                    },
                "&:not(.MuiChip-colorPrimary):not(.MuiChip-colorSecondary) .MuiChip-icon":
                    {
                        color: theme.vars.palette.action.disabled,
                    },
            },
            ...theme.applyStyles("dark", {
                fontSize: "0.875rem",
                backgroundColor: BLUIColors.black[500],
                color: theme.vars.palette.text.primary,
                "& .MuiChip-avatar": {
                    backgroundColor: BLUIColors.black[700],
                    color: theme.vars.palette.text.primary,
                    marginRight: -4,
                },
                "& .MuiChip-avatarColorPrimary": {
                    backgroundColor: theme.vars.palette.primary.light,
                    color: theme.vars.palette.primary.dark,
                },
                "& .MuiChip-avatarColorSecondary": {
                    backgroundColor: theme.vars.palette.primary.light,
                    color: theme.vars.palette.primary.dark,
                },
                "&.Mui-disabled": {
                    opacity: 1,
                    backgroundColor: Color(BLUIColors.black[200])
                        .alpha(0.24)
                        .string(),
                    color: BLUIColors.black[400],
                    "& .MuiChip-avatar": {
                        opacity: 0.5,
                    },
                    "& .MuiChip-deleteIcon": {
                        color: theme.vars.palette.action.disabled,
                    },
                    "& .MuiChip-icon": {
                        color: theme.vars.palette.action.disabled,
                    },
                },
            }),
        }),
        clickable: ({ theme }) => ({
            "&:hover": {
                backgroundColor: BLUIColors.gray[100],
            },
            "&.MuiChip-clickableColorPrimary": {
                "&:hover": {
                    backgroundColor: BLUIColors.blue[300],
                },
            },
            "&.MuiChip-clickableColorSecondary": {
                "&:hover": {
                    backgroundColor: BLUIColors.lightBlue[300],
                },
            },
            ...theme.applyStyles("dark", {
                "&:hover": {
                    backgroundColor: BLUIColors.black[400],
                },
                "&.MuiChip-clickableColorPrimary": {
                    "&:hover": {
                        backgroundColor: BLUIColors.blue[300],
                    },
                },
                "&.MuiChip-clickableColorSecondary": {
                    "&:hover": {
                        backgroundColor: BLUIColors.lightBlue[300],
                    },
                },
            }),
        }),
        colorPrimary: ({ theme }) => ({
            backgroundColor: theme.vars.palette.primary.main,
            color: WhiteText,
            "&:not(.MuiChip-outlinedPrimary).Mui-disabled": {
                backgroundColor: theme.vars.palette.primary.light,
                color: BLUIColors.blue[200],
                opacity: 1,
            },
            ...theme.applyStyles("dark", {
                color: WhiteText,
                backgroundColor: theme.vars.palette.primary.dark,
            }),
        }),
        colorSecondary: ({ theme }) => ({
            backgroundColor: theme.vars.palette.secondary.main,
            color: WhiteText,
            "&:not(.MuiChip-outlinedSecondary).Mui-disabled": {
                backgroundColor: theme.vars.palette.secondary.light,
                color: BLUIColors.lightBlue[200],
                opacity: 1,
            },
            ...theme.applyStyles("dark", {
                color: WhiteText,
                backgroundColor: theme.vars.palette.secondary.dark,
            }),
        }),
        deleteIcon: ({ theme }) => ({
            fontSize: "1.125rem",
            height: "1.125rem",
            width: "1.125rem",
            margin: `0px ${Spacing}px 0px -4px`,
            color: theme.vars.palette.action.active,
            "&:hover": {
                color: theme.vars.palette.text.primary,
            },
            "&.MuiChip-deleteIconColorPrimary": {
                color: BLUIColors.blue[100],
                "&:hover": {
                    color: WhiteText,
                },
            },
            "&.MuiChip-deleteIconColorSecondary": {
                color: BLUIColors.lightBlue[100],
                "&:hover": {
                    color: WhiteText,
                },
            },
            ...theme.applyStyles("dark", {
                fontSize: "1.125rem",
                height: "1.125rem",
                width: "1.125rem",
                margin: `0px ${Spacing}px 0px -4px`,
                color: theme.vars.palette.text.secondary,
                "&:hover": {
                    color: theme.vars.palette.text.primary,
                },
                "&.MuiChip-deleteIconColorPrimary": {
                    color: BLUIColors.blue[100],
                    "&:hover": {
                        color: WhiteText,
                    },
                },
                "&.MuiChip-deleteIconColorSecondary": {
                    color: BLUIColors.lightBlue[100],
                    "&:hover": {
                        color: WhiteText,
                    },
                },
            }),
        }),
        iconColorPrimary: ({ theme }) => ({
            ...theme.applyStyles('light', {
                color: "inherit",
            })
        }),
        iconColorSecondary: ({ theme }) => ({
            ...theme.applyStyles('light', {
                color: "inherit",
            })
        }),
        outlined: ({ theme }) => ({
            borderColor: Color(BlackBorder).alpha(0.12).string(),
            backgroundColor: "transparent",
            "&.MuiChip-clickable:hover": {
                backgroundColor: BLUIColors.white[200],
            },
            "& .MuiChip-avatar": {
                backgroundColor: BLUIColors.gray[500],
                marginRight: -4,
            },
            "& .MuiChip-avatarColorPrimary": {
                backgroundColor: BLUIColors.blue[100],
                color: theme.vars.palette.primary.main,
            },
            "& .MuiChip-avatarColorSecondary": {
                backgroundColor: BLUIColors.blue[100],
                color: theme.vars.palette.primary.main,
            },
            "& .MuiChip-icon": {
                marginLeft: Spacing,
                marginRight: -4,
            },
            "& .MuiChip-deleteIcon": {
                margin: `0px ${Spacing}px 0px -4px`,
            },
            "&.Mui-disabled .MuiChip-deleteIcon": {
                color: "inherit",
            },
            "&.MuiChip-outlinedPrimary": {
                backgroundColor: `rgba(${theme.vars.palette.primary.main} / 0.05)`,
                border: `1px solid ${theme.vars.palette.primary.main}`,
                color: theme.vars.palette.primary.main,
                "&.MuiChip-clickable:hover": {
                    backgroundColor: `rgba(${theme.vars.palette.primary.main} / 0.1)`,
                },
                "&.Mui-disabled": {
                    opacity: 1,
                    backgroundColor: theme.vars.palette.background.paper,
                    color: theme.vars.palette.action.disabled,
                    borderColor: Color(BlackBorder).alpha(0.12).string(),
                },
                "& .MuiChip-deleteIconOutlinedColorPrimary": {
                    "&:hover": {
                        color: theme.vars.palette.primary.main,
                    },
                },
            },
            "&.MuiChip-outlinedSecondary": {
                backgroundColor: `rgba(${theme.vars.palette.secondary.main} / 0.05)`,
                border: `1px solid ${theme.vars.palette.secondary.main}`,
                color: theme.vars.palette.secondary.main,
                "&.MuiChip-clickable:hover": {
                    backgroundColor: `rgba(${theme.vars.palette.secondary.main} / 0.1)`,
                },
                "&.Mui-disabled": {
                    opacity: 1,
                    backgroundColor: theme.vars.palette.background.paper,
                    color: theme.vars.palette.action.disabled,
                    borderColor: Color(BlackBorder).alpha(0.12).string(),
                },
                "& .MuiChip-deleteIconOutlinedColorSecondary": {
                    "&:hover": {
                        color: theme.vars.palette.secondary.main,
                    },
                },
            },
            ...theme.applyStyles("dark", {
                backgroundColor: theme.vars.palette.background.paper,
                borderColor: Color(BLUIColors.black[200]).alpha(0.32).string(),
                "&.MuiChip-clickable:hover": {
                    backgroundColor: BLUIColors.black[800],
                },
                "& .MuiChip-avatar": {
                    backgroundColor: BLUIColors.black[600],
                    color: theme.vars.palette.text.primary,
                    marginRight: -4,
                },
                "& .MuiChip-avatarColorPrimary": {
                    backgroundColor: BLUIColors.blue[100],
                    color: theme.vars.palette.primary.dark,
                },
                "& .MuiChip-avatarColorSecondary": {
                    backgroundColor: BLUIColors.blue[100],
                    color: theme.vars.palette.primary.dark,
                },
                "& .MuiChip-icon": {
                    marginLeft: Spacing,
                    marginRight: -4,
                },
                "& .MuiChip-deleteIcon": {
                    margin: `0px ${Spacing}px 0px -4px`,
                },
                "&.Mui-disabled .MuiChip-deleteIcon": {
                    color: "inherit",
                },
                "&.MuiChip-outlinedPrimary": {
                    backgroundColor: `rgba(${theme.vars.palette.primary.dark} / 0.2)`,
                    border: `1px solid rgba(${theme.vars.palette.primary.dark} / 0.2)`,
                    color: theme.vars.palette.primary.main,
                    "&.MuiChip-clickable:hover": {
                        backgroundColor: `rgba(${theme.vars.palette.primary.dark} / 0.3)`,
                    },
                    "& .MuiChip-deleteIconOutlinedColorPrimary": {
                        color: BLUIColors.blue[400],
                        "&:hover": {
                            color: theme.vars.palette.primary.main,
                        },
                    },
                    "&.Mui-disabled": {
                        opacity: 1,
                        borderColor: Color(BLUIColors.black[200])
                            .alpha(0.36)
                            .string(),
                        backgroundColor: "transparent",
                        color: BLUIColors.black[400],
                        "& .MuiChip-deleteIconOutlinedColorPrimary": {
                            color: "inherit",
                        },
                    },
                },
                "&.MuiChip-outlinedSecondary": {
                    backgroundColor: `rgba(${theme.vars.palette.secondary.main} / 0.2)`,
                    border: `1px solid ${theme.vars.palette.secondary.main}`,
                    color: theme.vars.palette.secondary.main,
                    "&.MuiChip-clickable:hover": {
                        backgroundColor: `rgba(${theme.vars.palette.secondary.dark} / 0.3)`,
                    },
                    "& .MuiChip-deleteIconOutlinedColorSecondary": {
                        color: BLUIColors.lightBlue[400],
                        "&:hover": {
                            color: theme.vars.palette.secondary.main,
                        },
                    },
                    "&.Mui-disabled": {
                        opacity: 1,
                        backgroundColor: theme.vars.palette.background.paper,
                        color: theme.vars.palette.action.disabled,
                        borderColor: Color(BLUIColors.black[200])
                            .alpha(0.36)
                            .string(),
                        "& .MuiChip-deleteIconOutlinedColorSecondary": {
                            color: "inherit",
                        },
                    },
                },
            }),
        }),
        icon: ({ theme }) => ({
            ...theme.applyStyles('light', {
                fontSize: "1.125rem",
                color: theme.vars.palette.text.primary,
                marginLeft: Spacing,
                marginRight: -4,
            }),
        })
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiChip"];
