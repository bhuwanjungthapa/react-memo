//import Cart from './Cart';
import Navbar from './Navbar';

import { useEffect } from 'react';
import Form from './UnControlledForm';

function App()
{
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Hello");
        }, 5000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="App">
            <Form />
        </div>
    );
}

export default App;