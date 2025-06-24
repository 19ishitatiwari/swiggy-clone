import React from 'react';
import ReactDOM from 'react-dom/client';

const elem = <span>This is a JSX element</span>;
const JsxHeading = () => <h1 className='jsx-heading'>Hello, World from JSX!</h1>;

console.log(JsxHeading);

//Component Composition
const HeaderComponent = () => {
    return (
        <div>
            <JsxHeading />
            <JsxHeading></JsxHeading>
            {JsxHeading()}
            <h1 className='header-component'>This is the HeaderComponent {elem}</h1>
        </div>
    );
}

// Render to the root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);