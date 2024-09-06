import {fireEvent, render, screen} from "@testing-library/react-native";
import {RadioGroup} from "../components";

describe('RadioGroup Component', () => {
    const options = [
        {label: "Apple", value: "apple"},
        {label: "Banana", value: "banana"},
        {label: "Kiwi", value: "kiwi"},
        {label: "Blackberry", value: "blackberry"},
    ];

    it('should render the RadioGroup with options', () => {
        render(
            <RadioGroup
                onValueChange={() => {
                }}
                value="apple"
                options={options}
                label="Choose one:"
            />
        );

        expect(screen.getByText('Choose one:')).toBeTruthy();
        expect(screen.getByText('Apple')).toBeTruthy();
        expect(screen.getByText('Banana')).toBeTruthy();
        expect(screen.getByText('Kiwi')).toBeTruthy();
        expect(screen.getByText('Blackberry')).toBeTruthy();
    });

    it('should call onValueChange with the correct value when an option is pressed', () => {
        const mockOnValueChange = jest.fn();
        render(
            <RadioGroup
                onValueChange={mockOnValueChange}
                value="apple"
                options={options}
                label="Choose one:"
            />
        );

        const bananaOption = screen.getByText('Banana');
        fireEvent.press(bananaOption);

        expect(mockOnValueChange).toHaveBeenCalledWith('banana');
    });

    it('should display the helper text when provided', () => {
        render(
            <RadioGroup
                onValueChange={() => {
                }}
                value="apple"
                options={options}
                label="Choose one:"
                helperText="Please select one option"
            />
        );

        const helperText =  screen.getByText('Please select one option');
        expect(helperText).toBeTruthy();
    });
});
