import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <div> Header</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
}

export default App;
