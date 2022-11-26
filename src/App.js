
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Route/router';
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <div className="App max-w-screen-2xl	mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
