import { render } from '@testing-library/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { UISlot } from '../components';
import { UIContext } from '../context';
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

const mockContextValue = {
    color: 'red',
    size: 24,
};

describe('UISlot Component', () => {
    it('should render successfully', () => {
        const { getByText } = render(
            <UIContext.Provider value={mockContextValue}>
                <UISlot element={<Text>Test Text</Text>} />
            </UIContext.Provider>
        );
        const textElement = getByText('Test Text');
        expect(textElement).toBeTruthy();
    });

    it('should override context values with element props if provided', () => {
        const { getByText } = render(
            <UIContext.Provider value={mockContextValue}>
                <UISlot element={<Text style={{ color: 'blue', fontSize: 18 }}>Test Text</Text>} />
            </UIContext.Provider>
        );
        const textElement = getByText('Test Text');

        expect(textElement.props.style).toEqual(
            expect.objectContaining({ color: 'blue',fontSize: 18 }),
        );
    });

    it('should pass context values to a complex element', () => {
        const { getByTestId } = render(
            <UIContext.Provider value={mockContextValue}>
                <UISlot element={<View testID="test-view" style={{ padding: 10 }} />} />
            </UIContext.Provider>
        );
        const viewElement = getByTestId('test-view');
        expect(viewElement.props.color).toBe('red');
        expect(viewElement.props.size).toBe(24);

        expect(viewElement.props.style).toEqual(expect.objectContaining({ padding: 10 }));
    });
});
