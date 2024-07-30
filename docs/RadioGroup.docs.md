# RadioGroup Documentation

## Props

| Property        | Type                      | Description                                                              | Required | Default     |
|-----------------|---------------------------|--------------------------------------------------------------------------|----------|-------------|
| `options`       | `Option[]`                | Array of options to select from. Each option includes a label and value. | Yes      | `[]`        |
| `onValueChange` | `(value: string) => void` | Function called when the selected option changes.                        | Yes      |             |
| `value`         | `string`                  | Currently selected value.                                                | No       | `undefined` |
| `label`         | `string`                  | Label for the radio group.                                               | No       | `undefined` |
| `helperText`    | `string`                  | Additional helper text displayed below the radio group.                  | No       | `""`        |
| `disabled`      | `boolean`                 | If true, the radio group will be disabled.                               | No       | `false`     |
| `error`         | `boolean`                 | If true, the radio group will display an error state.                    | No       | `false`     |
| `...rest`       | `ViewProps`               | Additional props passed to the root element.                             | No       |             |

Option type:`{ label: string; value: string }`

---

## Usage

The `RadioGroup` component is used to allow the user to select one option from a set of mutually exclusive options. It
supports an optional label and helper text for providing additional context to the user.

**Example:**

```jsx
<RadioGroup
    options={[
        {label: "Option 1", value: "option1"},
        {label: "Option 2", value: "option2"},
        {label: "Option 3", value: "option3"}
    ]}
    value={selectedValue}
    onValueChange={(newValue) => setSelectedValue(newValue)}
    label="Select an option"
    helperText="Please choose one of the options above."
    disabled={isDisabled}
    error={hasError}
/>
```

In this example, the `RadioGroup` component displays three options. The `selectedValue` state determines which option is
currently selected, and the `onValueChange` function updates this state when a user selects a different option. The
component can be disabled (`isDisabled`) or show an error state (`hasError`) based on the application's logic.
---
