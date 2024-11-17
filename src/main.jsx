import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error';
import Root from './components/Root';
import Home from './components/Home';
import Next1 from './components/Next1';
import Next2 from './components/Next2';
import Next1Yes from './components/Next1Yes';
import Next1No from './components/Next1No';
import Next1YesYes from './components/Next1YesYes';
import Next1YesNo from './components/Next1YesNo';
import Next1YesNoNo from './components/Next1YesNoNo';
import Next1NoNo from './components/Next1NoNo';
import Result from './components/Result';
import Next2Yes from './components/Next2Yes';
import Next2YesNo from './components/Next2YesNo';
import Next2YesNoNo from './components/Next2YesNoNo';
import Next2No from './components/Next2No';
import Next2NoNo from './components/Next2NoNo';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch('/Fruits.json'),
        element: <Home></Home>
      },
      {
        path: "/next-1",
        loader: () => fetch('/Fruits1.json'),
        element: <Next1></Next1>
      },
      {
        path: "/next-2",
        loader: () => fetch('/Fruits2.json'),
        element: <Next2></Next2>
      },
      {
        path: "/Next1Yes",
        loader: () => fetch('/Next1Yes.json'),
        element: <Next1Yes></Next1Yes>
      },
      {
        path: "/Next1No",
        loader: () => fetch('/Next1No.json'),
        element: <Next1No></Next1No>
      },
      {
        path: "/Next1YesYes",
        loader: () => fetch('/Next1YesYes.json'),
        element: <Next1YesYes></Next1YesYes>
      },
      {
        path: "/Next1YesNo",
        loader: () => fetch('/Next1YesNo.json'),
        element: <Next1YesNo></Next1YesNo>
      },
      {
        path: "/Next1YesNoNo",
        loader: () => fetch('/Next1YesNoNo.json'),
        element: <Next1YesNoNo></Next1YesNoNo>
      },
      {
        path: "/Next1NoNo",
        loader: () => fetch('/Next1NoNo.json'),
        element: <Next1NoNo></Next1NoNo>
      },
      {
        path: "/result/:fId",
        loader: () => fetch('/Fruits.json'),
        element: <Result></Result>
      },
      {
        path: "/Next2Yes",
        loader: () => fetch('/Next2Yes.json'),
        element: <Next2Yes></Next2Yes>
      },
      {
        path: "/Next2YesNo",
        loader: () => fetch('/Next2YesNo.json'),
        element: <Next2YesNo></Next2YesNo>
      },
      {
        path: "/Next2YesNoNo",
        loader: () => fetch('/Next2YesNoNo.json'),
        element: <Next2YesNoNo></Next2YesNoNo>
      },
      {
        path: "/Next2No",
        loader: () => fetch('/Next2No.json'),
        element: <Next2No></Next2No>
      },
      {
        path: "/Next2NoNo",
        loader: () => fetch('/Next2NoNo.json'),
        element: <Next2NoNo></Next2NoNo>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
