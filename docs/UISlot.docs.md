# UISlot Documentation

The `UISlot` component is a utility used within the UI kit to inject properties, such as styles and theme settings, from the `UIContext` into a specified child component. This component helps ensure consistent styling and theming across the application by providing a centralized way to manage and apply context-based properties.

## API (Props)

| Prop Name  | Type          | Description                                                        | Default Value |
|------------|---------------|--------------------------------------------------------------------|---------------|
| `element`  | ReactElement  | The React element to which the `UIContext` properties will be applied. |         |

---
## Usage

The `UISlot` component is typically used to wrap other components that need to receive context-based styling or theming properties. By using `UISlot`, these components automatically inherit any styles or settings defined in the `UIContext`.

### Example

```javascript
const ExampleComponent = () => {
  return (
    <UISlot element={<Home />} />
  );
};
```

In this example, the `Icon` component wrapped by `UISlot` will receive additional properties such as `size` and `color` from the `UIContext`, ensuring it is styled consistently with the application's theme.

### Notes

- **Context Styles Overriding**: If the `element` already has certain props defined, the properties from the `UIContext` will override them. This ensures that the context's theming and styling are consistently applied.

---
