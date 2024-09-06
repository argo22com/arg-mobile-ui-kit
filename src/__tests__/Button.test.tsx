import { render, fireEvent, screen } from "@testing-library/react-native";
import { Button } from "../components";
import {View,Text} from "react-native";

describe('Button Component', () => {
    it('should render the Button with label', () => {
        render(
            <Button>Click</Button>
        );

        expect(screen.getByText('Click')).toBeTruthy();
    });

    it('should call onPress when the button is pressed', () => {
        const mockOnPress = jest.fn();
        render(
            <Button onPress={mockOnPress}>Click</Button>
        );

        const button = screen.getByText('Click');
        fireEvent.press(button);

        expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('should display the loader when loading is true', () => {
        render(
            <Button loading={true}>Click</Button>
        );

        expect(screen.getByTestId('loader')).toBeTruthy();
    });

    it('should render the left slot when provided', () => {
        const leftSlot = <View><Text>Left slot</Text></View>;
        render(
            <Button leftSlot={leftSlot}>Click</Button>
        );

        expect(screen.getByText('Left slot')).toBeTruthy();
    });

    it('should render the right slot when provided', () => {
        const rightSlot = <View><Text>Right slot</Text></View>;
        render(
            <Button rightSlot={rightSlot}>Click</Button>
        );

        expect(screen.getByText('Right slot')).toBeTruthy();
    });
});
