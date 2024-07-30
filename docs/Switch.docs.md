# Switch Documentation

## Props

| Property     | Type                         | Description                                        | Required | Default     |
|--------------|------------------------------|----------------------------------------------------|----------|-------------|
| `checked`    | `boolean`                    | Indicates if the switch is in the "on" position.   | Yes      | `false`     |
| `onChange`   | `(checked: boolean) => void` | Function called when the switch state changes.     | Yes      |             |
| `disabled`   | `boolean`                    | If true, the switch will be disabled.              | No       | `false`     |
| `label`      | `string`                     | Text label displayed next to the switch.           | No       | `undefined` |
| `helperText` | `string`                     | Additional helper text displayed below the switch. | No       | `""`        |
| `...rest`    | `ViewProps`                  | Additional props passed to the root element.       | No       |             |

---

## Usage

The `Switch` component is used to toggle between two states, such as enabling or disabling a feature. It can include an
optional label and helper text for clarity.

**Example:**

```jsx
<Switch
    checked={isEnabled}
    onChange={(newValue) => setIsEnabled(newValue)}
    label="Enable notifications"
    helperText="You will receive notifications for new updates."
    disabled={isLoading}
/>
```

In this example, the switch controls whether notifications are enabled. The component's state (`isEnabled`) is managed
externally, and it can be disabled while loading (`isLoading`).
---

