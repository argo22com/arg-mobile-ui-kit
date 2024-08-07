export const colors = {
    base: {
        white: "#ffffff",
        black: "#000000"
    },
    primary: {
        100: "#E3E3FF",
        400: "#8482FF",
        500: "#433FFF",
        600: "#2D29D3",
        800: "#05044B",
    },
    neutral: {
        100: "#F6F6F6",
        400: "#C9C9C9",
        500: "#AAAAAA",
        600: "#616161",
        800: "#252525",
    },
    secondary: {
        100: "#E3E3FF",
        400: "#8482FF",
        500: "#433FFF",
        600: "#2D29D3",
        800: "#05044B",
    },
    success: {
        100: "#E0FAF2",
        400: "#8AECCE",
        500: "#2DDAA6",
        600: "#0D9A70",
        800: "#095B43",
    },
    error: {
        100: "#FCE4E6",
        400: "#FC8088",
        500: "#EB4A54",
        600: "#D42732",
        800: "#651116",
    },
    warning: {
        100: "#FFF3E8",
        400: "#FFAC5F",
        500: "#FF8719",
        600: "#E36D00",
        800: "#783A00",
    },
    info: {
        100: "#E3F5FF",
        400: "#9CDBFF",
        500: "#3FBAFF",
        600: "#2E90C7",
        800: "#043B5A",
    },
    overlay: "rgba(0, 0, 0, 0.3)"
}

export const borderRadiuses = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    full: 9999,
};

export const spacings = {
    none: 0,
    "2xs": 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    "2xl": 48,
}

export const fonts = {
    paragraph: {
        light: "SpaceMonoRegular",
        strong: "SpaceMonoBold",
    },
    heading: {
        light: "FrauncesRegular",
        strong: "FrauncesBold",
    },
}

export const fontSizes = {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 18,
    xl: 24,
    "2xl": 24,
}

export const borderWidth = {
    none: 0,
    sm: 1,
    md: 2,
}

export const defaultTheme = {
    colors,
    spacing: spacings,
    fontFamily: fonts,
    fontSize: fontSizes,
    borderRadius: borderRadiuses,
    sizes: {
        checkbox: 24,
        radio: 18,
        icon: 24,
        switch: 24,
    },
    components: {
        typography: {
            colors: {
                primary: colors.neutral["800"],
                secondary: colors.neutral["500"],
                label: colors.neutral["500"],
                placeholder: colors.neutral["400"],
            },
        },
        input: {
            borderRadius: borderRadiuses.xs,
            // Aligns Label and HelperText with input value from left
            alignComponentsWithInputValue: false,
            spacings: {
                vertical: spacings.sm,
                horizontal: spacings.md,
                label: spacings["2xs"],
                helpertext: spacings["2xs"],
            },
            fonts: {
                label: fonts.heading.light,
                text: fonts.paragraph.light,
            },
            variants: {
                active: {
                    borderWidth: borderWidth.sm,
                    color: {
                        background: colors.base.white,
                        foreground: colors.primary["500"],
                    },
                },
                disabled: {
                    borderWidth: borderWidth.sm,
                    color: {
                        background: colors.neutral["100"],
                        foreground: colors.neutral["500"],
                    },
                },
                error: {
                    borderWidth: borderWidth.sm,
                    color: {
                        background: colors.error["100"],
                        foreground: colors.error["500"],
                    },
                },
                default: {
                    borderWidth: borderWidth.sm,
                    color: {
                        background: colors.base.white,
                        foreground: colors.neutral["800"],
                    },
                },
                pressed: {
                    color: colors.primary["100"],
                },
            },
        },
        selectOption: {
            spacing: {
                vertical: spacings.sm,
                horizontal: spacings.md,
            },
            variants: {
                pressed: {
                    color: colors.primary["100"],
                },
                active: {
                    color: colors.success["100"],
                },
            },
        },
        checkbox: {
            borderRadius: borderRadiuses.xs,
            label: {
                font: fonts.paragraph.light,
                spacing: {
                    vertical: spacings.md,
                },
                variant: {
                    active: {
                        color: colors.neutral["800"],
                        font: fonts.paragraph.strong,
                    },
                },
            },
        },
        switch: {
            borderRadius: borderRadiuses.md,
            label: {
                font: fonts.paragraph.light,
                spacing: {
                    vertical: spacings.sm,
                },
                variant: {
                    active: {
                        color: colors.neutral["800"],
                        font: fonts.paragraph.strong,
                    },
                },
            },
            spacing: {
                horizontal: spacings["2xs"],
                vertical: spacings["2xs"],
            },
        },
        radio: {
            borderRadius: borderRadiuses.full,
            groupLabel: {
                // follows input label config
                variant: {
                    active: {
                        color: colors.neutral["800"],
                    },
                },
            },
            radioLabel: {
                font: fonts.paragraph.light,
                spacing: {
                    vertical: spacings.sm,
                },
                variant: {
                    active: {
                        color: colors.neutral["800"],
                        font: fonts.paragraph.strong,
                    },
                },
            },
        },
        button: {
            font: fonts.paragraph.light,
            size: {
                sm: {
                    spacing: {
                        vertical: spacings.sm,
                        horizontal: spacings.md,
                    },
                    borderRadius: borderRadiuses.lg,
                    gap: spacings.sm,
                },
                md: {
                    spacing: {
                        vertical: spacings.sm,
                        horizontal: spacings.md,
                    },
                    borderRadius: borderRadiuses.md,
                    gap: spacings.sm,
                },
                lg: {
                    spacing: {
                        vertical: spacings.sm,
                        horizontal: spacings.lg,
                    },
                    borderRadius: borderRadiuses.sm,
                    gap: spacings.sm,
                },
            },
            variants: {
                primary: {
                    borderWidth: {
                        default: borderWidth.sm,
                        pressed: borderWidth.sm,
                        disabled: borderWidth.sm,
                    },
                    color: {
                        background: colors.primary["500"],
                        foreground: colors.base.white,
                        pressed: colors.primary["600"],
                        disabled: {
                            background: colors.neutral["500"],
                            foreground: colors.neutral["500"],
                        },
                    },
                },
                secondary: {
                    borderWidth: {
                        default: borderWidth["none"],
                        pressed: borderWidth.sm,
                        disabled: borderWidth.sm,
                    },
                    color: {
                        background: colors.primary['100'],
                        foreground: colors.primary["500"],
                        pressed: colors.primary["100"],
                        disabled: {
                            background: colors.neutral["400"],
                            foreground: colors.neutral["500"],
                        },
                    },
                },
                tertiary: {
                    borderWidth: {
                        default: borderWidth.sm,
                        pressed: borderWidth.sm,
                        disabled: borderWidth.sm,
                    },
                    color: {
                        background: "transparent",
                        foreground: colors.primary["500"],
                        pressed: colors.primary["100"],
                        disabled: {
                            background: "transparent",
                            foreground: colors.neutral["500"],
                        },
                    },
                },
            },
        },
        toast: {
            borderRadius: borderRadiuses.md,
            iconSize: 24,
            spacings: {
                vertical: spacings.sm,
                horizontal: spacings.md,
            },
            fonts: {
                label: fonts.paragraph.strong,
                text: fonts.paragraph.light,
            },
            pressedOpacity: 0.7,
            variants: {
                info: {
                    borderWidth: borderWidth.sm,
                    color: {
                        background: colors.info["100"],
                        foreground: colors.info["800"],
                    },
                },
                success: {
                    borderWidth: borderWidth.sm,
                    color: {
                        background: colors.success["100"],
                        foreground: colors.success["800"],
                    },
                },
                warning: {
                    borderWidth: borderWidth.sm,
                    color: {
                        background: colors.warning["100"],
                        foreground: colors.warning["800"],
                    },
                },
                error: {
                    borderWidth: borderWidth.sm,
                    color: {
                        background: colors.error["100"],
                        foreground: colors.error["800"],
                    },
                },
            },
        },
    },
}
