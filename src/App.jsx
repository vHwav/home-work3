import { NavTop, ProductLists, Productheader, TabMenu } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <Productheader />
      <NavTop></NavTop>
      <TabMenu></TabMenu>
      <ProductLists></ProductLists>
    </>
  );
}

export default App;
