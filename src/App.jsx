import Login from './pages/Login';
import { Provider } from 'react-redux';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { store } from './store';
import Home from './pages/Home';
import Registration from './pages/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registeration",
    element: <Registration/>
  },
]);


function App() {
  return (
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  )
}

export default App
