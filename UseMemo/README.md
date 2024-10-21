# useMemo

This application demonstrates a simple user list filtering feature using the `useMemo` hook. It renders a list of users and allows filtering based on the length of the user's name, with the filtering process being memoized for optimization.

### Key Features:

1. **State Management with `useState`:**  
   The component manages a `nameLength` state, which controls the minimum name length required to display a user in the list.

2. **Memoized Filtering with `useMemo`:**  
   The list of users is filtered using the `useMemo` hook to optimize performance. The filtering logic only re-executes when the `nameLength` or `users` array changes, preventing unnecessary recalculations during component re-renders.

3. **Dynamic Threshold Input:**  
   A number input allows users to dynamically adjust the name length threshold, and the list updates accordingly.

### Code Explanation:

```tsx
const longNamedUsers = useMemo(() => {
  console.log('Filtering users with long names...');
  return users.filter(user => user.name.length > nameLength);
}, [users, nameLength]);
```

- This code filters the `users` array to only include users whose names are longer than the specified `nameLength`. The `useMemo` hook ensures that this filtering is only recomputed when the `users` list or `nameLength` changes.

---
