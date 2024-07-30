# Toast Documentation

## Props

| Property      | Type                                           | Description                                                                      | Required                                              | Default     |
|---------------|------------------------------------------------|----------------------------------------------------------------------------------|-------------------------------------------------------|-------------|
| `title`       | `string`                                       | The title of the component.                                                      | No                                                    | `undefined` |
| `description` | `string`                                       | The description of the component.                                                | No                                                    | `undefined` |
| `onClose`     | `() => void`                                   | The function to call when the component is closed.                               | Yes                                                   |             |
| `pressable`   | `boolean`                                      | Indicates if the component is pressable.                                         | No                                                    | `false`     |
| `onPress`     | `() => void`                                   | The function to call when the component is pressed (if pressable).               | No                                                    | `undefined` |
| `open`        | `boolean`                                      | Indicates if the component is open.                                              | No                                                    | `true`      |
| `toastType`   | `"background"\| "foreground"`                  | The type of the toast, either background or foreground. For accessibility reason | No                                                    | `null`      |
| `icon`        | `typeof toastIcon                              | null`                                                                            | The icon to display in the component.                 | No          | `null`   |
| `closeSlot`   | `ReactElement                                  | null`                                                                            | A custom element to replace the default close button. | No          | ahoj   |
| `actionSlot`  | `{ onPress: () => void; slot: ReactElement; }` | A custom action element with an associated press handler.                        | No                                                    | `null`      |
| `type`        | `"info"\| "success"\| "error"\| "warning"`     | The variant type of the component.                                               | No                                                    | `"info"`    |