import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Welcome to Color Guesser !</div>,
  },
]);

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
