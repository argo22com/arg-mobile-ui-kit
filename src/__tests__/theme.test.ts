import { createTheme, defaultTheme } from "../theme";  // Adjust the import based on the file name

describe('createTheme', () => {
  test('returns default theme when called with no arguments', () => {
    const theme = createTheme();

    expect(theme).toEqual(defaultTheme);
  });

  test('merges custom tokens with the default tokens', () => {
    const customTokens = {
      color: {
        primary: {
          500: "#123456"
        }
      }
    };

    const theme = createTheme(customTokens);

    expect(theme.color.primary[500]).toBe("#123456");
    expect(theme.color.primary[100]).toBe(defaultTheme.color.primary[100]);  // Default value should still be present
  });

  test('merges custom component config with the default component config', () => {
    const customComponentsConfig = {
      button: {
        variants: {
          primary: {
            color: {
              background: "#654321"
            }
          }
        }
      }
    };

    const theme = createTheme({}, customComponentsConfig);

    expect(theme.components.button.variants.primary.color.background).toBe("#654321");
    expect(theme.components.button.variants.primary.color.foreground).toBe(defaultTheme.components.button.variants.primary.color.foreground);  // Default value should still be present
  });

  test('merges both custom tokens and component config correctly', () => {
    const customTokens = {
      color: {
        primary: {
          500: "#123456"
        }
      }
    };

    const customComponentsConfig = {
      button: {
        variants: {
          primary: {
            color: {
              background: "#654321"
            }
          }
        }
      }
    };

    const theme = createTheme(customTokens, customComponentsConfig);

    expect(theme.color.primary[500]).toBe("#123456");
    expect(theme.components.button.variants.primary.color.background).toBe("#654321");
  });
});