import Home from './views/Home/Home'

import { Route, BrowserRouter, Routes } from 'react-router-dom'


const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
