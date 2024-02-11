import { Provider } from 'react-redux';
import { store } from '../../helpers/store.js';
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {Header} from "../components/Header/index.jsx";
import {Footer} from '../components/Footer/index.jsx';
import Wrapper from "../components/Wrapper/index.jsx";
import {InputField} from "../components/InputField/index.jsx";
import {TodoList} from "../components/TodoList/index.jsx";
import {Info} from '../components/Info/index.jsx';
//import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {Todo} from "../pages/Todo.jsx";
// import {Info} from "../pages/Info.jsx";
//import {Info} from '../components/Info';

const muiTheme = createTheme({
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    //backgroundColor: 'gray',
                }
            }
        }
    }
});

export function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={muiTheme}>
                <Wrapper>
                    <Header />
                    <InputField />
                    <TodoList />
                    <Info />
                    <Footer />
                </Wrapper>
                {/*<BrowserRouter>*/}
                {/*    <Wrapper>*/}
                {/*        <Header />*/}
                {/*        <Routes>*/}
                {/*            <Route path='/todo' element={<Todo />}/>*/}
                {/*            <Route path='/info' element={<Info />}/>*/}
                {/*        </Routes>*/}
                {/*        <Footer />*/}
                {/*    </Wrapper>*/}
                {/*</BrowserRouter>*/}
            </ThemeProvider>
        </Provider>
    )
}