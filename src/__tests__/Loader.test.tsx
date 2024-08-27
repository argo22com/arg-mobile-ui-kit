import { LucideLoaderCircle } from "lucide-react-native";
import { render, waitFor } from '@testing-library/react-native';
import { Loader } from '../components';
import React from 'react';
import { UIContext } from '../context';
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

const mockContextValue = {
    size: 50,
    color: 'red',
};

describe('Loader Component', () => {
    it('should render successfully', () => {
        const { root } = render(
            <UIContext.Provider value={mockContextValue}>
                <Loader />
            </UIContext.Provider>
        );
        expect(root).toBeTruthy();
    });

    it('should use context values for size and color', async () => {
        const { root } = render(
            <UIContext.Provider value={mockContextValue}>
                <Loader />
            </UIContext.Provider>
        );

        await waitFor(() => {
            const loaderCircle = root.findByType(LucideLoaderCircle);
            expect(loaderCircle.props.size).toBe(mockContextValue.size);
            expect(loaderCircle.props.color).toBe(mockContextValue.color);
        });
    });
});
