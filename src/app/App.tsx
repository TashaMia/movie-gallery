import { Outlet } from "react-router";
import Header from "../widgets/header/ui/Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <div>Footer</div>
    </div>
  );
}

export default App;
