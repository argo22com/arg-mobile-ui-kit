import {render} from '@testing-library/react-native';
import {Typography} from '../components';
import React from 'react';
import {UIContext} from '../context';
import {View} from 'react-native';
import {createTheme} from "../theme";

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native-unistyles', () => {
    const {createTheme} = require('../theme');
    const theme = createTheme();
    return {
        ...jest.requireActual('react-native-unistyles'),
        useStyles: jest.fn((styleSheet, options) => {
            const styles = styleSheet(theme);

            return {
                styles: {
                    root: {
                        ...styles.root,
                        ...styles.root.variants.color[options.color],
                        ...styles.root.variants.size[options.size],
                    },
                    bold: styles.bold,
                },
            };
        }),
    };
});

const mockContextValue = {
    color: 'blue',
    fontSize: 20,
};

describe('Typography Component', () => {
    it('should render successfully', () => {
        const {getByText} = render(
            <View>
                <Typography>Test Text</Typography>
            </View>
        );
        const textElement = getByText('Test Text');
        expect(textElement).toBeTruthy();
    });

    it('should apply passed props correctly', () => {
        const {getByText} = render(
            <Typography bold size="md" color="primary">
                Bold Text
            </Typography>
        );
        const textElement = getByText('Bold Text');
        expect(textElement.props.style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({fontFamily: 'SpaceMonoBold'}),
                expect.objectContaining({fontSize: 16}),
                expect.objectContaining({color: "#252525"})
            ])
        );
    });

    it('should render with default font family and font size', () => {
        const {getByText} = render(
            <Typography>Default Text</Typography>
        );
        const textElement = getByText('Default Text');
        expect(textElement.props.style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    fontFamily: 'SpaceMonoRegular',
                    variants: expect.objectContaining({
                        size: expect.objectContaining({default: expect.objectContaining({fontSize: 16})}),
                    }),
                }),
            ])
        );
    });

    it('should use context values for color and fontSize if no props are passed', () => {
        const {getByText} = render(
            <UIContext.Provider value={mockContextValue}>
                <Typography>Context Text</Typography>
            </UIContext.Provider>
        );
        const textElement = getByText('Context Text');

        expect(textElement.props.style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({color: 'blue'}),
                expect.objectContaining({fontSize: 20}),
            ])
        );
    });
});
