import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Works from './Works/Works';
import './App.scss';
import Home from './Home';
import NotFound from './NotFound/NotFound';
import Loader from './components/Loader/Loader';
const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [loading])

    if (loading) return <Loader />;

    return (
        <div className='app'>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>

    );
};

export default App;