import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Posts } from "./containers/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="App">
          <h1>Twitter</h1>
        </div>
        <Posts></Posts>
      </>
    ),
  },
  {
    path: "about",
    element: (
      <div className="App">
        <h1>About</h1>
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
