# ItemList Documentation

## Props

| Property | Type         | Description                                                            | Required | Default |
|----------|--------------|------------------------------------------------------------------------|----------|---------|
| `items`  | `Item[]`     | Array of items to be displayed in the list.                           | Yes      |         |
| `...rest`| `ViewProps`  | Additional props passed to the root view of the list component.       | No       |         |

---

## Types

```typescript
export type Item = {
  left: TextPayload | ReactNode;
  right: TextPayload | ReactNode;
} & ViewProps;

export type TextPayload = {
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
};

```

## Usage

The `ItemList` component is a structured list that displays a series of `ListItem` components, each with customizable left and right content. It supports separation between list items with a separator line.

**Example:**

```jsx
<ItemList
    items={[
        {left: {value: "Label 1", icon: <Home/>}, right: "Value 1"},
        {left: {value: "Label 2" }, right: {value: "Value 2", disabled: true}},
        {left: {value: "Label 3" }, right: {value: "Value 3", icon: <ArrowRight/>}},
    ]}
/>
```

In this example, the `ItemList` component renders a list with three items, each containing customizable left and right content. The first item displays an icon alongside its label, the second item shows a disabled value, and the third item features an icon on the right side, demonstrating the versatility of the ItemList component in displaying various types of data.

---
