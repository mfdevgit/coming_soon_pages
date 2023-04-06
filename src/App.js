import { Route, Routes } from 'react-router-dom'
import First from './pages/First/First'
import Second from './pages/Second/Second'
import Navigation from './components/Navigation/Navigation'

function App() {
    return (
        <div className='app'>
            <Navigation />
            <Routes>
                <Route path='/' element={<First />} />
                <Route path='/first' element={<First />} />
                <Route path='/second' element={<Second />} />
            </Routes>
        </div>
    )
}

export default App
