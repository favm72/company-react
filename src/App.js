import './App.css';
import { MyProvider } from './context/MyContext';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';

function App() {
	return (
		<MyProvider>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</MyProvider>		
	);
}

export default App;
