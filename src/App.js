
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Route/router';

function App() {
  return (
    <div>
      <div className="App max-w-screen-2xl	mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
