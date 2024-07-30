# Typography Documentation

## Props

| Property   | Type              | Description                                                                                  | Required | Default   |
|------------|-------------------|----------------------------------------------------------------------------------------------|----------|-----------|
| `bold`     | `boolean`         | If `true`, the text will be displayed in a bold style.                                       | No       | `false`   |
| `style`    | `object`          | Additional styles for the text.                                                              | No       | None      |
| `size`     | `string`          | Specifies the font size variant. Options: `xl`, `lg`, `md`, `sm`, `xs`.                      | No       | `md`      |
| `variant`  | `string`          | Specifies the font variant. Options: `heading`, `default`.                                   | No       | `default` |
| `disabled` | `boolean`         | If `true`, applies a disabled style, typically a lighter color.                              | No       | `false`   |
| `error`    | `boolean`         | If `true`, applies an error style, typically a red color.                                    | No       | `false`   |
| `color`    | `string`          | Specifies the color variant. Options: `primary`, `secondary`.                                | No       | `primary` |
| `children` | `React.ReactNode` | The text or elements to display inside the Typography component.                             | Yes      | None      |
| `...rest`  | `TextProps`       | Additional props passed to the `Text` component, such as accessibility or layout properties. | No       |           |

---

## Description

The `Typography` component is a versatile text component that integrates with the application's UI context to apply
consistent styling based on context settings and provided props. It supports various font sizes, styles, and contextual
states such as disabled or error.

## Usage

**Example:**

```jsx
<Typography size="xl" bold color="primary">
    Hello, World!
</Typography>
```

In this example, the text "Hello, World!" is displayed in an extra-large size, bold, and with the primary color.

## Context Integration

The component uses `UIContext` to inherit styling properties like `size`, `color`, and more, ensuring consistency across
the application. These context styles can be overridden by explicitly setting props.

## Styles and Variants

Configuration must be done in `theme.ts`

- **Font Size (`size`)**: Controls the text size. Options include `xl`, `lg`, `md`, `sm`, `xs`, with `md` being the
  default.
- **Color (`color`)**: Determines the text color. Options include `primary` and `secondary`. The `default` is `primary`.
- **Bold (`bold`)**: When `true`, the text uses a bolder font weight. For `heading` variant, a specific bold style is
  applied.
- **Variant (`variant`)**: Specifies the font family variant. `heading` uses a specific heading font, while `default`
  uses the regular font family.
- **Disabled (`disabled`)**: When `true`, applies a lighter color to indicate a disabled state.
- **Error (`error`)**: When `true`, changes the text color to indicate an error.

## Customization

The component's styles are defined using `createStyleSheet`, allowing easy customization through theming. It supports
React Native's standard `Text` properties for additional styling and functionality.

---
