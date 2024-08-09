import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import {Page} from "./components/Page.tsx";
import {Context, contextValue} from "./context/Context.ts";

export function App() {
    return (
        <Context.Provider value={contextValue}>
            <ThemeProvider theme={contextValue.theme}>
                <CssBaseline/>
                <Page/>
            </ThemeProvider>
        </Context.Provider>
    );
}