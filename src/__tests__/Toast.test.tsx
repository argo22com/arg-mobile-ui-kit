import {render, fireEvent, screen, waitFor} from "@testing-library/react-native";
import { Toast } from "../components";
import { View, Text } from "react-native";
import {CircleCheck, XIcon} from "lucide-react-native";

describe('Toast Component', () => {
    it('should render the toast with title and description', () => {
        render(
            <Toast
                title="Toast title"
                description="Toast description"
                onClose={() => {}}
            />
        );

        expect(screen.getByText('Toast title')).toBeTruthy();
        expect(screen.getByText('Toast description')).toBeTruthy();
    });

    it('should render the correct icon based on the type', () => {
        const { root } = render(
            <Toast
                title="Toast title"
                description="Toast description"
                onClose={() => {}}
                type="success"
            />
        );

        const circleCheckIcon = root.findByType(CircleCheck);
        expect(circleCheckIcon).toBeTruthy();
    });

    it('should call onClose when the close button is pressed', () => {
        const mockOnClose = jest.fn();
        const { root } = render(
            <Toast
                title="Toast title"
                description="Toast description"
                onClose={mockOnClose}
            />
        );

        const closeButton = root.findByType(XIcon);
        fireEvent.press(closeButton);

        waitFor(() => expect(mockOnClose).toHaveBeenCalledTimes(1));
    });

    it('should render the action slot when provided', () => {
        const actionSlot = <View><Text>Action slot</Text></View>;
        const { root } = render(
            <Toast
                title="Toast title"
                description="Toast description"
                onClose={() => {}}
                actionSlot={{ onPress: () => {}, slot: actionSlot }}
            />
        );

        const textElements = root.findAllByType(Text);
        const actionSlotElement = textElements.find((element) => element.props.children === 'Action slot');
        expect(actionSlotElement?.props.children).toBe('Action slot');
    });

    it('should render the close slot when provided', () => {
        const closeSlot = <View><Text>Close slot</Text></View>;
        const { root } = render(
            <Toast
                title="Toast title"
                description="Toast description"
                onClose={() => {}}
                closeSlot={closeSlot}
            />
        );

        const textElements = root.findAllByType(Text);
        const closeSlotElement = textElements.find((element) => element.props.children === 'Close slot');
        expect(closeSlotElement?.props.children).toBe('Close slot');
    });
});
