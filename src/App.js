import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import ProductListing from './components/ProductListing.jsx';

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
