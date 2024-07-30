# Label Documentation

## Props

| Property              | Type              | Description                                                                                   | Required | Default |
|-----------------------|-------------------|-----------------------------------------------------------------------------------------------|----------|---------|
| `alignWithInputValue` | `boolean`         | If true, aligns the label with the text input value, adding padding to the left.              | No       | `false` |
| `...rest`             | `TypographyProps` | Additional props passed to the underlying `Typography` component, such as `size` and `color`. | No       |         |

---

## Usage

The `Label` component is used to provide a text label for form fields. It can align with the input field if needed.

**Example:**

```jsx
<Label alignWithInputValue={true}>
    Input Label
</Label>

<Label color="blue">
    Custom Colored Label
</Label>
```

In the example above, the first `Label` is aligned with the input value, typically useful for form fields where
alignment consistency is desired. The second example customizes the label color.

---
