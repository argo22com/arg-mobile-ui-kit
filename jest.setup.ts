jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native-unistyles', () => {
    const {createTheme} = require('./src/theme');
    const theme = createTheme();

    return {
        ...jest.requireActual('react-native-unistyles'),
        useStyles: jest.fn((styleSheet, options = {}) => {
            const styles = styleSheet(theme);
            const color = options.color ? styles.root.variants.color[options.color] : {};
            const size = options.size ? styles.root.variants.size[options.size] : {};
            return {
                styles: {
                    ...styles,
                    root: {
                        ...styles.root,
                        ...color,
                        ...size,
                    },
                    bold: styles.bold,
                },
                theme,
            };
        }),
    };
});


jest.mock('react-native-safe-area-context', () => {
    return {
        useSafeAreaInsets: jest.fn().mockReturnValue({
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
        }),
    };
});


