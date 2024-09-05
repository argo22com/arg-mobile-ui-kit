import {render} from '@testing-library/react-native';
import {Label} from '../components';
import {UIContext} from '../context';
import {View} from 'react-native';

describe('Label Component', () => {
    it('should render successfully', () => {
        const {getByText} = render(
            <View>
                <Label>Test Label</Label>
            </View>
        );
        const textElement = getByText('Test Label');
        expect(textElement).toBeTruthy();
    });

    it('should apply passed props correctly', () => {
        const {getByText} = render(
            <Label style={{color: 'red'}}>Styled Label</Label>
        );
        const textElement = getByText('Styled Label');

        expect(textElement.props.style).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([
                    expect.objectContaining({color: 'red'})])]))
    });

    it('should use context values for color and fontSize if no props are passed', () => {
        const mockContextValue = {
            color: 'blue',
            fontSize: 20,
        };

        const {getByText} = render(
            <UIContext.Provider value={mockContextValue}>
                <Label>Context Label</Label>
            </UIContext.Provider>
        );
        const textElement = getByText('Context Label');

        expect(textElement.props.style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({color: 'blue'}),
                expect.objectContaining({fontSize: 20}),
            ])
        );
    });
});

