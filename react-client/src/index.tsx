import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router'

ReactDOM.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
    ,
    document.getElementById('root')
);
