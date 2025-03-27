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

function App() {
    return (
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={theme}>
                    <Box display="flex" flexDirection="column" height="100vh">
                        <Header />
                        <Box component="main" flexGrow={1} height={'100%'}>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/service" element={<ServicePage />} />
                                <Route path="/auth" element={<AuthPage />} />
                                <Route element={<PrivateRoute />}>
                                    <Route path="/results" element={<ResultsPage />} />
                                </Route>
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Routes>
                        </Box>
                    </Box>
                    <ResizeListener />
                </ThemeProvider>
            </Router>
        </Provider>
    );
}

export default App;
