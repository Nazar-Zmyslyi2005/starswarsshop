import {createContext} from "react";
import {Signal} from "@preact/signals";
import {PaletteMode, Theme} from "@mui/material";
import {createTheme} from "@mui/material/styles";

class ContextValue {
    private _mode: Signal<PaletteMode> = new Signal('light')
    private _theme: Signal<Theme> = new Signal(createTheme({
            palette: {
                mode: this._mode.value,
            },
        })
    );

    constructor() {
    }

    get theme() {
        return this._theme.value;
    }

    get mode() {
        return this._mode.value as PaletteMode;
    }

    set mode(mode: PaletteMode) {
        this._theme.value = createTheme({
            palette: {
                mode: mode,
            },
        });
        this._mode.value = mode;
    }
}

export const contextValue = new ContextValue();

export const Context = createContext(contextValue);