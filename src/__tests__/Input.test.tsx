import { render, fireEvent, screen } from "@testing-library/react-native";
import { Input } from "../components";
import { View, Text } from "react-native";

describe('Input Component', () => {
    it('should render the input field', () => {
        render(<Input placeholder="Enter your name" />);

        expect(screen.getByPlaceholderText('Enter your name')).toBeTruthy();
    });

    it('should call onChangeText when the input value changes', () => {
        const mockOnChangeText = jest.fn();
        render(<Input onChangeText={mockOnChangeText} value="Initial value" />);

        const inputField = screen.getByDisplayValue('Initial value');
        fireEvent.changeText(inputField, 'New value');

        expect(mockOnChangeText).toHaveBeenCalledTimes(1);
        expect(mockOnChangeText).toHaveBeenCalledWith('New value');
    });

    it('should display the label when provided', () => {
        render(<Input label="Name" placeholder="Enter your name" />);

        expect(screen.getByText('Name')).toBeTruthy();
    });

    it('should display the helper text when provided', () => {
        render(<Input helperText="This is a helper text" placeholder="Enter your name" />);

        expect(screen.getByText('This is a helper text')).toBeTruthy();
    });

    it('should render the start slot when provided', () => {
        const startSlot = <View><Text>Start slot</Text></View>;
        render(<Input startSlot={startSlot} placeholder="Enter your name" />);

        expect(screen.getByText('Start slot')).toBeTruthy();
    });

    it('should render the end slot when provided', () => {
        const endSlot = <View><Text>End slot</Text></View>;
        render(<Input endSlot={endSlot} placeholder="Enter your name" />);

        expect(screen.getByText('End slot')).toBeTruthy();
    });

    it('should be disabled when the disabled prop is true', () => {
        render(<Input disabled={true} placeholder="Enter your name" />);

        const inputField = screen.getByPlaceholderText('Enter your name');
        expect(inputField.props.editable).toBe(false);
    });

    it('should display an error message when the error prop is true', () => {
        render(<Input error={true} helperText="Error message" placeholder="Enter your name" />);

        expect(screen.getByText('Error message')).toBeTruthy();
    });
});
