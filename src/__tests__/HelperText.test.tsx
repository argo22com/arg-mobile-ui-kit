import {render} from '@testing-library/react-native';
import React from 'react';
import {HelperText} from '../components';
import {UIContext} from '../context';
import {View} from 'react-native';

describe('HelperText Component', () => {
    it('should render successfully', () => {
        const {getByText} = render(
            <View>
                <HelperText>Test Helper Text</HelperText>
            </View>
        );
        const textElement = getByText('Test Helper Text');
        expect(textElement).toBeTruthy();
    });

    it('should apply passed props correctly', () => {
        const {getByText} = render(
            <HelperText style={{color: 'red'}}>Styled Helper Text</HelperText>
        );
        const textElement = getByText('Styled Helper Text');

        expect(textElement.props.style).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([
                    expect.objectContaining({color: 'red'})])]))
    });

    it('should use context values for color and fontSize if no props are passed', () => {
        const mockContextValue = {
            color: 'blue',
            fontSize: 20,
        };

        const {getByText} = render(
            <UIContext.Provider value={mockContextValue}>
                <HelperText>Context Helper Text</HelperText>
            </UIContext.Provider>
        );
        const textElement = getByText('Context Helper Text');

        expect(textElement.props.style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({color: 'blue'}),
                expect.objectContaining({fontSize: 20}),
            ])
        );
    });
});
