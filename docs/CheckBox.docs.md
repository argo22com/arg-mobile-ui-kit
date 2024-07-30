# CheckBox Documentation

## Props

| Property     | Type                         | Description                                          | Required | Default     |
|--------------|------------------------------|------------------------------------------------------|----------|-------------|
| `checked`    | `boolean`                    | Indicates if the checkbox is checked.                | Yes      | `false`     |
| `onChange`   | `(checked: boolean) => void` | Function called when the checkbox state changes.     | Yes      |             |
| `disabled`   | `boolean`                    | If true, the checkbox will be disabled.              | No       | `false`     |
| `error`      | `boolean`                    | If true, the checkbox will display an error state.   | No       | `false`     |
| `label`      | `string`                     | Text label displayed next to the checkbox.           | No       | `undefined` |
| `helperText` | `string`                     | Additional helper text displayed below the checkbox. | No       | `""`        |
| `...rest`    | `ViewProps`                  | Additional props passed to the root element.         | No       |             |

---

## Usage

The `CheckBox` component is used to let users select one or more items from a set or toggle an option on or off. It
supports an optional label and helper text for additional context.

**Example:**

```jsx
<CheckBox
    checked={isSubscribed}
    onChange={(newValue) => setIsSubscribed(newValue)}
    label="Subscribe to newsletter"
    helperText="Receive the latest updates and news."
    disabled={isLoading}
    error={hasError}
/>
```

In this example, the checkbox is used to manage a subscription option. The component's state (`isSubscribed`) is managed
externally, and it can show an error (`hasError`) or be disabled (`isLoading`) based on the component's state.

---
