# ToastManager

Set of components and hooks to enable calling and displaying Toasts in the app.

## Structure

* `<ToastManagerProvider />` will provide toast managing context to its children
* `<ToastsPortal />` will render toasts into `<PortalHost />`. Toasts to render are given to the portal through the context.
* `useToast()` hook that allows you to create toasts imperatively
   * returns object with `toast(payload)` - a function to create toast - and `toasts` - an array of toasts. 
   * `toast(paylaod)` payload will accept all the props from `<Toast />` component 

## Usage
Wrap your app or node of your components tree with `<ToastManagerProvider>` and add `<ToastsPortal />` as its children. 
```typescript jsx
<ToastManagerProvider>
    <ToastsPortal />

    {/* ... rest of your app - children will have access to useToast hook */}
</ToastManagerProvider>
```

Inside the provider you can use `useToast` hook which will let you imperatively create toasts.

```typescript
const { toast } = useToast();

toast({ title: "Info Toast", description: "This is info toast" })
toast({ title: "Info Toast", description: "This is info toast", type: "success" })
```

for complete list of parameters you can pass to `toast()` function see [Toast Documentation](Toast.docs.md)