import reactdom from "react-dom/client"
import App from "./App";
let  toot = reactdom.createRoot(document.getElementById("root"));
toot.render(<App/>)