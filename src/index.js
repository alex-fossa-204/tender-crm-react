import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {LandingContext} from "./components/landing/context/LandingContext";
import {WorkspaceContext} from "./components/workspace/context/WorkspaceContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LandingContext>
        <WorkspaceContext>
            <App />
        </WorkspaceContext>
    </LandingContext>
);
