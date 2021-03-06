import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'wouter'
import Game from './Components/Game'
import MainMenu from './Components/MainMenu'
import Settings from './Components/Settings'
import useHashLocation from './Hook/useHashLocation'

import { SettingsContextProvider } from './Context/SettingsContext'

ReactDOM.render(
	<React.StrictMode>
		<Router hook={useHashLocation}>
			<SettingsContextProvider>
				<div className='container'>
					<Route path="/" component={MainMenu} />
					<Route path="/game" component={Game} />
					<Route path="/settings" component={Settings} />
				</div>
			</SettingsContextProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
