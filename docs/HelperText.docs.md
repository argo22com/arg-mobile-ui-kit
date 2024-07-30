# HelperText Documentation

## Props

| Property              | Type              | Description                                                                                   | Required | Default |
|-----------------------|-------------------|-----------------------------------------------------------------------------------------------|----------|---------|
| `alignWithInputValue` | `boolean`         | If true, aligns the helper text with the text input value, adding padding to the left.        | No       | `false` |
| `...rest`             | `TypographyProps` | Additional props passed to the underlying `Typography` component, such as `size` and `color`. | No       |         |

---

## Usage

The `HelperText` component is a simple text component typically used to provide additional guidance or information
related to a form input. It can align with the input field if needed.

**Example:**

```jsx
<HelperText alignWithInputValue={true}>
    This is some helper text aligned with the input.
</HelperText>

<HelperText color="red">
    This is some helper text with a custom color.
</HelperText>
```

In the example above, the first `HelperText` is aligned with the input value, typically useful for form fields where
alignment consistency is desired. The second example customizes the text color.

---
