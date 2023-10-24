import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Body from "../components/Body";
import Contact from "../screens/Contact";
import About from "../screens/About";

export default function RouterRoot(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={ <Body /> } path="/">
                    <Route element={ <Home /> } path="/" />
                    <Route element={ <Contact /> } path="/contact" />
                    <Route element={ <About /> } path="/about" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}