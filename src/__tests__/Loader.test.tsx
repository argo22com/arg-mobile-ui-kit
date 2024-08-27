import { LucideLoaderCircle } from "lucide-react-native";
import { render } from '@testing-library/react-native';
import { Loader } from '../components';
import React from 'react';
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('Loader Component', () => {
    it('should render successfully', () => {
        const { root } = render(<Loader size={50} color="red" />);
        expect(root).toBeTruthy();
    });

    it('should use passed props for size and color', () => {
        const { root } = render(<Loader size={50} color="red" />);
        const loaderCircle = root.findByType(LucideLoaderCircle);
        expect(loaderCircle.props.size).toBe(50);
        expect(loaderCircle.props.color).toBe('red');
    });
});
