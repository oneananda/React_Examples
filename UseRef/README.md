# React Focus Toggle Application

[useRef Demo](https://stackblitz.com/edit/oneananda-useref-demo?file=src%2FApp.tsx&terminal=dev)

## Overview

This project is a simple React application created using Vite. It demonstrates how to programmatically focus and toggle between an input field and a button using `useRef` and `useState` hooks. The app allows users to click a button to either focus the input or remove the focus, depending on the state. The application showcases React's state management and event handling in conjunction with direct DOM manipulation.

## Key Concepts

### useRef Hook
The `useRef` hook is used to get direct references to DOM elements in React. It allows us to access the actual DOM elements and interact with them directly, without triggering re-renders. In this app, we use `useRef` to access both the input field and the button elements to focus them when necessary.

### useState Hook
`useState` is used to manage the toggling behavior of the focus state. It keeps track of whether the input field is focused or not, and based on this state, we dynamically change the label of the button and control which element receives focus.

### Asynchronous State Updates in React

A key point to understand in this project is how React handles state updates asynchronously. This is crucial when managing the focus behavior between the input and button elements.
