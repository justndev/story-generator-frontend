import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {Provider} from 'react-redux';
import HomePage from './pages/HomePage';
import {ThemeProvider, Box} from "@mui/material";
import theme from "./hooks/theme";
import Header from "./UI/components/Header";
import ServicePage from "./pages/ServicePage";
import AuthPage from "./pages/AuthPage";
import ResultsPage from "./pages/ResultsPage";
import PrivateRoute from "./UI/components/utilComponents/PrivateRoute";
import store from "./utils/redux/store";
import './index.css'
import ResizeListener from "./UI/components/utilComponents/ResizeListener";
import LocalStorageListener from "./UI/components/utilComponents/LocalStorageListener";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={theme}>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/auth" element={<AuthPage/>}/>

                            <Route element={<PrivateRoute/>}>
                                <Route path="/results" element={<ResultsPage/>}/>
                                <Route path="/service" element={<ServicePage/>}/>
                            </Route>
                            <Route path="*" element={<Navigate to="/" replace/>}/>
                        </Routes>
                    <ResizeListener/>
                    <LocalStorageListener/>
                </ThemeProvider>
            </Router>
        </Provider>
    );
}

export default App;
