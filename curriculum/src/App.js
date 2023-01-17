import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../src/componentes/Hompage';
import InformacioPersonal from './componentes/InformacionPersonal';
import Educacion from './componentes/Educacion';
import Experiencia from './componentes/Experiencia';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/info" component={InformacioPersonal} />
					<Route exact path="/educacion" component={Educacion} />
					<Route exact path="/experiencia" component={Experiencia} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
