# Select Documentation

## Props

| Property        | Type                       | Description                                                          | Required | Default           |
|-----------------|----------------------------|----------------------------------------------------------------------|----------|-------------------|
| `value`         | `Option`                   | Currently selected option.                                           | No       | `undefined`       |
| `options`       | `Option[]`                 | Array of options available for selection.                            | Yes      |                   |
| `onValueChange` | `(option: Option) => void` | Function called when the selected option changes.                    | Yes      |                   |
| `label`         | `string`                   | Label displayed above the select field.                              | No       | `""`              |
| `placeholder`   | `string`                   | Placeholder text when no option is selected.                         | No       | `""`              |
| `helperText`    | `string`                   | Additional helper text displayed below the select field.             | No       | `""`              |
| `disabled`      | `boolean`                  | If true, the select field is disabled and cannot be interacted with. | No       | `false`           |
| `error`         | `boolean`                  | If true, the select field displays an error state.                   | No       | `false`           |
| `endSlotOpened` | `ReactElement`             | Custom element displayed at the end of the select field when open.   | No       | `<ChevronUp />`   |
| `endSlotClosed` | `ReactElement`             | Custom element displayed at the end of the select field when closed. | No       | `<ChevronDown />` |
| `...rest`       | `ViewProps`                | Additional props passed to the root element.                         | No       |                   |

Option type:`{ label: string; value: string }`

---

## Usage

The `Select` component is used to create a dropdown menu, allowing users to choose one option from a list. It supports a
label, placeholder, helper text, and can be customized with icons or other elements at the end of the field.

**Example:**

```jsx
<Select
    options={[
        {label: "Option 1", value: "option1"},
        {label: "Option 2", value: "option2"},
        {label: "Option 3", value: "option3"}
    ]}
    value={selectedOption}
    onValueChange={(newOption) => setSelectedOption(newOption)}
    label="Select an option"
    placeholder="Choose an option"
    helperText="Please select one of the options from the list."
    disabled={isDisabled}
    error={hasError}
    endSlotOpened={<ChevronUp/>}
    endSlotClosed={<ChevronDown/>}
/>
```

In this example, the `Select` component displays a dropdown menu with three options. The `selectedOption` state
determines which option is currently selected, and the `onValueChange` function updates this state when a user selects a
different option. The component can be customized with different icons when the dropdown is open or closed, and can be
disabled or display an error state based on the application's logic.

---
