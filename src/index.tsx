import ReactDOM from "react-dom/client"

import App from "./App"

import "./locale/i18n"
import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	// <React.StrictMode>
	<App />
	// </React.StrictMode>
)
