import { render } from '@testing-library/react-native';
import { Icon } from '../components';
import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');


const SvgComponent = (props: SvgProps) => (
    <Svg testID="icon-svg"  viewBox="0 0 24 24" fill="none" {...props} >
        <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2v2m-3 8v9m6-9v9M5 16l4-2m6 0 4 2M9 18h6M10 8v.01M14 8v.01M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z"
        />
    </Svg>
);

describe('Icon Component', () => {
    it('should render successfully', () => {
        const { getByTestId } = render(
            <Icon SvgIcon={SvgComponent} />
        );
        const svgIcon = getByTestId('icon-svg');
        expect(svgIcon).toBeTruthy();
    });

    it('should use passed props for size, strokeWidth, and color', () => {
        const { getByTestId } = render(
            <Icon
                SvgIcon={SvgComponent}
                size={32}
                strokeWidth={4}
                color="green"
                absoluteStrokeWidth={true}
            />
        );

        const svgIcon = getByTestId('icon-svg');
        expect(svgIcon.props.width).toBe(32);
        expect(svgIcon.props.height).toBe(32);
        expect(svgIcon.props.stroke).toBe('green');
        expect(svgIcon.props.strokeWidth).toBe(
            (4 * 24) / 32
        );
    });

    it('should use default values if no props are passed', () => {
        const { getByTestId } = render(
            <Icon SvgIcon={SvgComponent} />
        );

        const svgIcon = getByTestId('icon-svg');
        expect(svgIcon.props.width).toBe(24);
        expect(svgIcon.props.stroke).toBe("currentColor");
        expect(svgIcon.props.strokeWidth).toBe(2);
    });
});
