import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Posts } from "./containers/Posts";
import { PostDetail } from "./containers/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="App">
          <h1>Twitter</h1>
        </div>
        <Posts />
      </>
    ),
  },
  {
    path: "post_detail/:id",
    element: (
      <>
        <div className="App">
          <h1>Twitter</h1>
        </div>
        <PostDetail />
      </>
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
