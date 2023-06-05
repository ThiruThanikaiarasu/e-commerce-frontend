import './App.css';
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// import {ShoppingCartIcon} from '@mui/icons-material';
// import HomeComponent from './components/HomeComponent/HomeComponent';
// import MyAccountComponent from './components/MyAccountComponent.jsx/MyAccountComponent';
// import CartComponent from './components/CartComponent/CartComponent';
// import Router1Component from './components/Router1Component/Router1Component';
// import Router2Component from './components/Router2Component/Router2Component';
// import Router3Component from './components/Router3Component/Router3Component';
// import Router4Component from './components/Router4Component/Router4Component';
// import Router5Component from './components/Router5Component/Router5Component';

import jsonData from './Data/data.json' 
import RouterComponent from './RouterComponent';
const data = jsonData.category

// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function App() {
    return (
        <div className="App text-blue-500 flex">
            
            <div>
                {/* <h2>Product List</h2> */}
                <ul className='flex'>
                    {data.map((product) => (
                    <li key={product.id} className='px-5'>
                        {/* <h3>{product.title}</h3> */}
                        
                        <RouterComponent titles ={product.title} id={product.id}/>
                        {/* <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <img src={product.image} alt={product.name} /> */}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
