import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
// import ToggleMode from './ToggleMode';
// import DarkMode from './darkMode';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
      {/* <ToggleMode /> */}
      {/* <DarkMode></DarkMode> */}
    </div>
  );
}

export default App;
