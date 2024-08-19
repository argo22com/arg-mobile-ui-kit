import { deepMerge, DeepPartial } from "../utils/deepMerge";

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
    "2xl": 48,
}

export const borderWidth = {
    none: 0,
    sm: 1,
    md: 2,
}

export const sizes = {
    checkbox: 24,
    radio: 18,
    icon: 24,
    switch: 24,
}

const themeTokens = {
    color: colors,
    spacing: spacings,
    fontFamily: fonts,
    fontSize: fontSizes,
    borderRadius: borderRadiuses,
    borderWidth: borderWidth,
    size: sizes,
}

type ThemeTokens = typeof themeTokens;

const createThemeComponentsConfig = (tokens: ThemeTokens) => ({
    typography: {
        colors: {
            primary: tokens.color.neutral["800"],
            secondary: tokens.color.neutral["500"],
            label: tokens.color.neutral["500"],
            placeholder: tokens.color.neutral["400"],
        },
    },
    input: {
        borderRadius: tokens.borderRadius.xs,
        // Aligns Label and HelperText with input value from left
        alignComponentsWithInputValue: false,
        spacings: {
            vertical: tokens.spacing.sm,
            horizontal: tokens.spacing.md,
            label: tokens.spacing["2xs"],
            helpertext: tokens.spacing["2xs"],
        },
        fonts: {
            label: tokens.fontFamily.paragraph.light,
            text: tokens.fontFamily.paragraph.light,
        },
        variants: {
            active: {
                borderWidth: tokens.borderWidth.sm,
                color: {
                    background: tokens.color.base.white,
                    foreground: tokens.color.primary["500"],
                },
            },
            disabled: {
                borderWidth: tokens.borderWidth.sm,
                color: {
                    background: tokens.color.neutral["100"],
                    foreground: tokens.color.neutral["500"],
                },
            },
            error: {
                borderWidth: tokens.borderWidth.sm,
                color: {
                    background: tokens.color.error["100"],
                    foreground: tokens.color.error["500"],
                },
            },
            default: {
                borderWidth: tokens.borderWidth.sm,
                color: {
                    background: tokens.color.base.white,
                    foreground: tokens.color.neutral["800"],
                },
            },
            pressed: {
                color: tokens.color.primary["100"],
            },
        },
    },
    selectOption: {
        spacing: {
            vertical: tokens.spacing.sm,
            horizontal: tokens.spacing.md,
        },
        variants: {
            pressed: {
                color: tokens.color.primary["100"],
            },
            active: {
                color: tokens.color.success["100"],
            },
        },
    },
    checkbox: {
        borderRadius: tokens.borderRadius.xs,
        label: {
            font: tokens.fontFamily.paragraph.light,
            spacing: {
                vertical: tokens.spacing.md,
            },
            variant: {
                active: {
                    color: tokens.color.neutral["800"],
                    font: tokens.fontFamily.paragraph.strong,
                },
            },
        },
    },
    switch: {
        borderRadius: tokens.borderRadius.md,
        label: {
            font: tokens.fontFamily.paragraph.light,
            spacing: {
                vertical: tokens.spacing.sm,
            },
            variant: {
                active: {
                    color: tokens.color.neutral["800"],
                    font: tokens.fontFamily.paragraph.strong,
                },
            },
        },
        spacing: {
            horizontal: tokens.spacing["2xs"],
            vertical: tokens.spacing["2xs"],
        },
    },
    radio: {
        borderRadius: tokens.borderRadius.full,
        groupLabel: {
            // follows input label config
            variant: {
                active: {
                    color: tokens.color.neutral["800"],
                },
            },
        },
        radioLabel: {
            font: tokens.fontFamily.paragraph.light,
            spacing: {
                vertical: tokens.spacing.sm,
            },
            variant: {
                active: {
                    color: tokens.color.neutral["800"],
                    font: tokens.fontFamily.paragraph.strong,
                },
            },
        },
    },
    button: {
        font: tokens.fontFamily.paragraph.light,
        size: {
            sm: {
                spacing: {
                    vertical: tokens.spacing.sm,
                    horizontal: tokens.spacing.md,
                },
                borderRadius: tokens.borderRadius.lg,
                gap: tokens.spacing.sm,
            },
            md: {
                spacing: {
                    vertical: tokens.spacing.sm,
                    horizontal: tokens.spacing.md,
                },
                borderRadius: tokens.borderRadius.md,
                gap: tokens.spacing.sm,
            },
            lg: {
                spacing: {
                    vertical: tokens.spacing.sm,
                    horizontal: tokens.spacing.lg,
                },
                borderRadius: tokens.borderRadius.sm,
                gap: tokens.spacing.sm,
            },
        },
        variants: {
            primary: {
                borderWidth: {
                    default: tokens.borderWidth.sm,
                    pressed: tokens.borderWidth.sm,
                    disabled: tokens.borderWidth.sm,
                },
                color: {
                    background: tokens.color.primary["500"],
                    foreground: tokens.color.base.white,
                    pressed: tokens.color.primary["600"],
                    disabled: {
                        background: tokens.color.neutral["500"],
                        foreground: tokens.color.neutral["500"],
                    },
                },
            },
            secondary: {
                borderWidth: {
                    default: borderWidth["none"],
                    pressed: tokens.borderWidth.sm,
                    disabled: tokens.borderWidth.sm,
                },
                color: {
                    background: tokens.color.primary['100'],
                    foreground: tokens.color.primary["500"],
                    pressed: tokens.color.primary["100"],
                    disabled: {
                        background: tokens.color.neutral["400"],
                        foreground: tokens.color.neutral["500"],
                    },
                },
            },
            tertiary: {
                borderWidth: {
                    default: tokens.borderWidth.sm,
                    pressed: tokens.borderWidth.sm,
                    disabled: tokens.borderWidth.sm,
                },
                color: {
                    background: "transparent",
                    foreground: tokens.color.primary["500"],
                    pressed: tokens.color.primary["100"],
                    disabled: {
                        background: "transparent",
                        foreground: tokens.color.neutral["500"],
                    },
                },
            },
        },
    },
    toast: {
        borderRadius: tokens.borderRadius.md,
        iconSize: tokens.size.icon,
        spacings: {
            vertical: tokens.spacing.sm,
            horizontal: tokens.spacing.md,
        },
        fonts: {
            label: tokens.fontFamily.paragraph.strong,
            text: tokens.fontFamily.paragraph.light,
        },
        pressedOpacity: 0.7,
        variants: {
            info: {
                borderWidth: tokens.borderWidth.sm,
                color: {
                    background: tokens.color.info["100"],
                    foreground: tokens.color.info["800"],
                },
            },
            success: {
                borderWidth: tokens.borderWidth.sm,
                color: {
                    background: tokens.color.success["100"],
                    foreground: tokens.color.success["800"],
                },
            },
            warning: {
                borderWidth: tokens.borderWidth.sm,
                color: {
                    background: tokens.color.warning["100"],
                    foreground: tokens.color.warning["800"],
                },
            },
            error: {
                borderWidth: tokens.borderWidth.sm,
                color: {
                    background: tokens.color.error["100"],
                    foreground: tokens.color.error["800"],
                },
            },
        },
    },

})

type ThemeComponentsConfig = ReturnType<typeof createThemeComponentsConfig>;

export const createTheme = (tokens?: DeepPartial<ThemeTokens>, componentsConfig?: DeepPartial<ThemeComponentsConfig>) => {
    const mergedTokens = deepMerge<ThemeTokens>(themeTokens, tokens ?? {});
    const baseComponentsConfig = createThemeComponentsConfig(mergedTokens);

    const mergedComponentsConfig = deepMerge<ThemeComponentsConfig>(createThemeComponentsConfig(mergedTokens), componentsConfig ?? {});

    return {
        ...mergedTokens,
        components: {
            ...baseComponentsConfig,
            ...mergedComponentsConfig,
        }
    }
}

export const defaultTheme = createTheme();