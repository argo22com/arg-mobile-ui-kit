export const colors = {
  base: {
    white: "#ffffff",
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
} as const;

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
} as const;

export const fonts = {
  paragraph: {
    light: "SpaceMonoRegular",
    strong: "SpaceMonoBold",
  },
  heading: {
    light: "FrauncesRegular",
    strong: "FrauncesBold",
  },
} as const;

export const fontSizes = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 18,
  xl: 24,
  "2xl": 24,
} as const;

export const borderWidth = {
  sm: 1,
  md: 2,
} as const;

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
      borderRadius: borderRadiuses.md,
      alignComponentsWithInputValue: true, // align Label and HelperText with input value from left
      // todo: přidat možnost nastavení odsazení labelu a helperTextu
      spacings: {
        vertical: spacings.sm,
        horizontal: spacings.md,
      },
      fonts: {
        label: fonts.heading.light,
        text: fonts.paragraph.light,
      },
      variants: {
        active: {
          borderWidth: borderWidth.md,
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
    option: {
      //select option
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
      //todo: přidat možnost výberu barvy textu u active stavu
      //todo: přidat možnost výberu fontu labelu
    },
    switch: {
      //todo: přidat možnost výberu barvy textu u active stavu
      spacing: {
        horizontal: spacings["2xs"],
        vertical: spacings["2xs"],
      },
    },
    radio: {
      //todo: přidat možnost výberu barvy textu u active stavu
      borderRadius: borderRadiuses.md,
    },
    button: {
      borderRadius: borderRadiuses.md,
      //todo: přidat borderRadius do velikostí buttonu
      font: fonts.paragraph.light,
      spacings: {
        sm: {
          vertical: spacings.sm,
          horizontal: spacings.md,
        },
        md: {
          vertical: spacings.sm,
          horizontal: spacings.md,
        },
        lg: {
          vertical: spacings.sm,
          horizontal: spacings.lg,
        },
      },
      variants: {
        //todo: přidat variantám možnost nastavení gap
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
    disabled: {
      //todo: odstranit
      opacity: 1,
    },
  },
} as const;
