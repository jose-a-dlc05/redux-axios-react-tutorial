import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductListing from './components/ProductListing';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact component={ProductListing} />
					<Route path='/product/:productId' component={ProductDetails} />
					<Route>404 Not Found!</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
