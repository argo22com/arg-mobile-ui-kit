# Card Documentation

## Props

| Property    | Type               | Description                                                 | Required | Default     |
|-------------|--------------------|-------------------------------------------------------------|----------|-------------|
| `outlined`  | `boolean`          | Applies an outlined variant to the card.                    | No       | `false`     |
| `rounded`   | `"sm" \| "md" \| "lg"` | Sets the border-radius size for the card.                    | No       | `"md"`      |
| `filled`    | `boolean`          | Applies a filled variant to the card.                       | No       | `false`     |
| `...rest`   | `ViewProps`        | Additional props passed to the underlying `View` component. | No       |             |

---

## Usage

The `Card` component is a flexible UI container with support for various visual styles like outlined, rounded, and filled. It leverages the theme system to apply styles based on variant configurations.

**Example:**

```jsx
<Card outlined rounded="lg" filled style={{ margin: 16 }}>
    <Text>This is a card component with custom styles.</Text>
</Card>
```

In this example, the `Card` component renders with an outlined, large-rounded, and filled variant. Additional styling is passed using the style prop.

## Style Variants

Configuration must be done in `theme.ts`.

### Size Variants (Rounded)

- **sm**: Small border-radius for a more compact card design.
- **md**: Medium border-radius (default) for balanced corners.
- **lg**: Large border-radius for more pronounced rounded corners.

### Visual Variants

- **default**: Standard card style with default padding and background color.
- **outlined**: Card with a border and transparent background.
- **filled**: Card with a solid background and border.

Each variant can be combined with different states like `outlined`, `filled`, or `rounded` to achieve the desired look.

---
