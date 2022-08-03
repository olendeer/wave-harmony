import { FC } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Home from './views/Home/Home'


const App: FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
