import { render, screen } from '@testing-library/react-native';
import React, { useContext } from 'react';
import { UIContext } from '../context';
import { Text, View } from "react-native";

const mockContextValue = {
    size: 50,
    color: 'red',
};

const TestComponent = () => {
    const contextStyles = useContext(UIContext);

    if (!contextStyles) {
        throw Error('UIContext has to be used within UIContext.Provider');
    }

    return (
        <View>
            {Object.entries(contextStyles).map(([key, value]) => (
                <Text key={key}>{key}: {value}</Text>
            ))}
        </View>
    );
}

describe('UIContext', () => {
    it('should pass props', () => {
        render(
            <UIContext.Provider value={mockContextValue}>
                <TestComponent />
            </UIContext.Provider>
        );

        screen.getByText('size: 50');
        screen.getByText('color: red');
    });
});
