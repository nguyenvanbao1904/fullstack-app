import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
    return (
        <Router>
            <div className="App">
                <h1>hello</h1>
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
