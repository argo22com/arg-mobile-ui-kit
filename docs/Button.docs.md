# Button Documentation

## Props

| Property         | Type                                                | Description                                                       | Required | Default     |
|------------------|-----------------------------------------------------|-------------------------------------------------------------------|----------|-------------|
| `loading`        | `boolean`                                           | If true, shows a loading indicator and disables the button.       | No       | `false`     |
| `leftSlot`       | `ReactElement`                                      | Custom element displayed on the left side of the button content.  | No       | `undefined` |
| `rightSlot`      | `ReactElement`                                      | Custom element displayed on the right side of the button content. | No       | `undefined` |
| `loaderPosition` | `"right" \| "left"`                                 | Position of the loader when loading is true.                      | No       | `"right"`   |
| `size`           | `"sm" \| "md" \| "lg"`                              | Size of the button.                                               | No       | `"md"`      |
| `disabled`       | `boolean`                                           | If true, the button is disabled.                                  | No       | `false`     |
| `variant`        | `"primary" \| "secondary" \| "tertiary" \| "danger"` | Style variant of the button.                                      | No       | `"primary"` |
| `...rest`        | `PressableProps`                                    | Additional props passed to the button.                            | No       |             |

---

## Usage

The `Button` component is a versatile UI element that supports different styles, sizes, and content customization. It
can display a loading state, custom left and right slots, and has various visual variants.

**Example:**

```jsx
<Button
    loading={isLoading}
    leftSlot={<ArrowLeft/>}
    rightSlot={<ArrowRight/>}
    size="lg"
    disabled={isDisabled}
    variant="secondary"
    onPress={() => console.log('Button Pressed!')}
>
    Click Me
</Button>
```

In this example, the `Button` component displays a large secondary-styled button with custom icons on both sides. The
button can show a loading state, and the `onPress` function handles button clicks. The `loading` prop, when true,
displays a loader in the specified position and disables the button interaction.

## Style Variants

Configuration must be done in `theme.ts`

### Size Variants

- **sm**: Small button with reduced padding.
- **md**: Medium button (default) with standard padding.
- **lg**: Large button with increased padding.

### Visual Variants

- **primary**: Default button style with a primary color scheme.
- **secondary**: Alternative button style with a secondary color scheme.
- **tertiary**: Button style with a minimalistic or tertiary color scheme.
- **danger**: Button style for destructive actions.

Each variant and size can be combined with different states like `pressed` and `disabled` to reflect appropriate visual
cues.

---
