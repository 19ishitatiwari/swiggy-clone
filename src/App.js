import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Body from './components/Body';

const AppLayout = () => (
    <div className='app-layout'>
        <Header />
        <Body />
    </div>
)

// Render to the root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);