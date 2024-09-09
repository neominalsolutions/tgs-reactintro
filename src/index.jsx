import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import reportWebVitals from './reportWebVitals';
import App, { AppOne, AppThree, AppTwo } from './App';
import RandomNumber from './components/random.number';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <AppOne title={'Sample 1'} content={'İçerik'} /> */}

		{/* <AppOne title="Sample 2" />

		<AppOne />

		<AppTwo title={'Sample 4'} content={'Sample 4 Content'} />

		<AppThree title="Class Component Sample" /> */}

		<RandomNumber randomNumber={20} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
