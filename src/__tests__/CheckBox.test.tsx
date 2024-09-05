import {fireEvent, render, screen} from "@testing-library/react-native";
import {CheckBox} from "../components";

describe('CheckBox Component', () => {
    it('should render the CheckBox with label', () => {
        render(
            <CheckBox
                checked={false}
                onChange={() => {
                }}
                label="Check me"/>
        );

        expect(screen.getByText('Check me')).toBeTruthy();
    });

    it('should call onChange with the correct value when the checkbox is pressed', () => {
        const mockOnChange = jest.fn();
        render(
            <CheckBox
                checked={false}
                onChange={mockOnChange}
                label="Check me"
            />
        );

        const checkbox = screen.getByRole('checkbox');
        fireEvent.press(checkbox);

        expect(mockOnChange).toHaveBeenCalledWith(true);
    });

    it('should display the helper text when provided', () => {
        render(
            <CheckBox
                checked={false}
                onChange={() => {
                }}
                label="Check me"
                helperText="This is a helper text"
            />
        );

        expect(screen.getByText('This is a helper text')).toBeTruthy();
    });
});
