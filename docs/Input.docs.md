# Input Documentation

## Props

| Property         | Type                     | Description                                                      | Required | Default     |
|------------------|--------------------------|------------------------------------------------------------------|----------|-------------|
| `value`          | `string`                 | The value of the input field.                                    | No       | `undefined` |
| `onChangeText`   | `(text: string) => void` | Callback that is called when the text input changes.             | No       | `undefined` |
| `placeholder`    | `string`                 | Placeholder text displayed when the input is empty.              | No       | `undefined` |
| `label`          | `string`                 | Optional label for the input field.                              | No       | `undefined` |
| `helperText`     | `string`                 | Optional helper text displayed below the input field.            | No       | `undefined` |
| `disabled`       | `boolean`                | If true, the input is disabled and not editable.                 | No       | `false`     |
| `error`          | `boolean`                | If true, styles the input field to indicate an error state.      | No       | `false`     |
| `endSlot`        | `ReactElement`           | Custom element displayed at the end of the input field.          | No       | `undefined` |
| `startSlot`      | `ReactElement`           | Custom element displayed at the start of the input field.        | No       | `undefined` |
| `textInputProps` | `TextInputProps`         | Additional props passed to the underlying `TextInput` component. | No       | `undefined` |
| `...rest`        | `ViewProps`              | Additional props passed to the outer `View` container.           | No       |             |

---

## Usage

The `Input` component is a customizable text input field that can include labels, helper texts, and custom slots. It
supports various states such as disabled and error, and provides ref forwarding for imperative operations.

**Example:**

```jsx
<Input
    label="Username"
    value={username}
    onChangeText={setUsername}
    placeholder="Enter your username"
    helperText="This will be your display name"
    disabled={isDisabled}
    error={hasError}
    endSlot={<Info/>}
    startSlot={<User/>}
    ref={inputRef}
/>
```

---

In this example, the `Input` component is used to get username. The `ref` is used for imperative operations like
focusing the input.

## Ref Methods

The `Input` component provides several methods through the ref:

- **`focus`**: Focuses the input field.
- **`blur`**: Blurs (or defocuses) the input field.
- **`clear`**: Clears the text in the input field.
- **`setSelection`**: Sets the selection range in the input field.
- **`isFocused`**: Checks if the input field is currently focused.

---
