import {fireEvent, render, screen} from "@testing-library/react-native";
import {Select} from "../components";

describe('Select Component', () => {
    it('should render successfully', () => {
        render(
            <Select
                label="Fruit"
                options={[
                    {label: 'Apple', value: 'apple'},
                    {label: 'Banana', value: 'banana'},
                ]}
                onValueChange={(option) => console.log(option)}
                placeholder="Select fruit"
            />
        );

        expect(screen.getByText('Select fruit')).toBeTruthy();
    });

    it('should open the dropdown when clicked', () => {
        render(
            <Select
                label="Fruit"
                options={[
                    {label: 'Apple', value: 'apple'},
                    {label: 'Banana', value: 'banana'},
                ]}
                onValueChange={(option) => console.log(option)}
                placeholder="Select fruit"
            />
        );

        const trigger = screen.getByTestId('select-trigger');
        fireEvent.press(trigger);

        setTimeout(() => {
            expect(screen.getByText('Apple')).toBeTruthy();
            expect(screen.getByText('Banana')).toBeTruthy();
        }, 100);
    });

    it('should select an option and update the value', () => {
        const mockOnValueChange = jest.fn();
        render(
            <Select
                label="Fruit"
                options={[
                    {label: 'Apple', value: 'apple'},
                    {label: 'Banana', value: 'banana'},
                ]}
                onValueChange={mockOnValueChange}
                placeholder="Select fruit"
            />
        );

        const trigger = screen.getByTestId('select-trigger');
        fireEvent.press(trigger);
        setTimeout(() => {
            const appleOption = screen.getByText('Apple');
            fireEvent.press(appleOption);
            expect(mockOnValueChange).toHaveBeenCalledWith('apple');
            expect(screen.getByText('Apple')).toBeTruthy();

        }, 100);
    });
});
