import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import Home from "../home/Home";

const theme = createMuiTheme({
    palette: {
        background: {
            default: "#30476b"
        },
        text: {
            primary: "#30476b"
        },
        primary: {
            main: "#30476b"
        }
    }
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <HashRouter>
                    <Switch>
                        <Route path={"/"}>
                            <Home/>
                        </Route>
                    </Switch>
                </HashRouter>
            </ThemeProvider>
        </div>
);
}

export default App;
