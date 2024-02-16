import { Provider } from 'react-redux';
import { store } from '../../helpers/store.js';
import {Header} from "../components/Header/index.jsx";
import {Footer} from '../components/Footer/index.jsx';
import Wrapper from "../components/Wrapper/index.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Todo} from "../../pages/Todo.jsx";
import {Info} from "../../pages/Info.jsx";

export function App() {
    return (
        <Provider store={store}>
                <BrowserRouter>
                    <Wrapper>
                        <Header />
                        <Routes>
                            <Route path='/todo' element={<Todo />}/>
                            <Route path='/info' element={<Info />}/>
                        </Routes>
                        <Footer />
                    </Wrapper>
                </BrowserRouter>
        </Provider>
    )
}