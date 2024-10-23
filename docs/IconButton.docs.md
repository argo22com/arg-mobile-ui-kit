# IconButton Documentation

## Props

| Property    | Type                                     | Description                                                    | Required | Default     |
|-------------|------------------------------------------|----------------------------------------------------------------|----------|-------------|
| `iconSlot`  | `ReactElement`                           | Custom icon element displayed inside the button.                | Yes      | `undefined` |
| `size`      | `"sm" \| "md" \| "lg"`                   | Size of the icon button.                                        | No       | `"md"`      |
| `disabled`  | `boolean`                                | If true, the icon button is disabled.                           | No       | `false`     |
| `variant`   | `"primary" \| "secondary" \| "tertiary"` | Style variant of the icon button.                               | No       | `"primary"` |
| `...rest`   | `PressableProps`                         | Additional props passed to the `Pressable` component.           | No       |             |

---

## Usage

The `IconButton` component is designed for displaying icons as buttons with various sizes, styles, and states. It supports disabled and pressed states, and can be customized with different size and variant options.

**Example:**

```jsx
<IconButton
    iconSlot={<MyIcon />}
    size="lg"
    disabled={isDisabled}
    variant="secondary"
    onPress={() => console.log('Icon Button Pressed!')}
/>
```
In this example, the `IconButton` component displays a large icon button with a secondary style. The disabled prop, when true, disables the button, and the onPress function handles button clicks.

---

## Style Variants

Configuration must be done in `theme.ts`.

### Size Variants

- **sm**: Small icon button with reduced padding.
- **md**: Medium icon button (default) with standard padding.
- **lg**: Large icon button with increased padding.

### Visual Variants

- **primary**: Default icon button style with a primary color scheme.
- **secondary**: Icon button style with a secondary color scheme.
- **tertiary**: Icon button style with a minimalistic or tertiary color scheme.

Each variant and size can be combined with different states like `pressed` and `disabled` to reflect appropriate visual cues.

---
