import React from 'react';
import './App.css';
import {LandingPage} from "./components/landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {WorkspacePage} from "./components/workspace";
import Dashboard from './pages/workspace/domain/Dashboard';
import Tenders from './pages/workspace/domain/Tenders';
import Lots from './pages/workspace/domain/Lots';
import Emplpoyees from './pages/workspace/domain/Emplpoyees';
import Managers from './pages/workspace/domain/Managers';
import Calendar from './pages/workspace/domain/Calendar';
import Kanban from './pages/workspace/domain/Kanban';

function App() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path={"/"} element={<LandingPage/>}></Route>
                        <Route path={"/workspace/dashboard"} element={<Dashboard/>}></Route>
                        <Route path={"/workspace/tenders"} element={<Tenders/>}></Route>
                        <Route path={"/workspace/lots"} element={<Lots/>}></Route>
                        <Route path={"/workspace/employees"} element={<Emplpoyees/>}></Route>
                        <Route path={"/workspace/managers"} element={<Managers/>}></Route>
                        <Route path={"/workspace/calendar"} element={<Calendar/>}></Route>
                        <Route path={"/workspace/kanban"} element={<Kanban/>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
