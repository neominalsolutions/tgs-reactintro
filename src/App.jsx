import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

// sayfada tek bir deault keyword tanımlanabilir.

export function AppOne(props) {
	// aşağıdakin tam tersi.
	const { title, content } = props;

	// Not: Propslar component içinden değiştirilemez. read only çalışır.
	const onclick = () => {
		// props.title = 'Title2';
		alert('mesaj');
	};

	return (
		<>
			<h1>{props.title}</h1>
			<p>{props.content}</p>

			<button onClick={onclick}>Click Me</button>
		</>
	);
}

AppOne.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
};

AppOne.defaultProps = {
	title: 'Title 3',
	Content: 'Content 3',
};

export const AppTwo = ({ title, content }) => {
	const props = { title, content };

	return (
		<>
			<h1>{title}</h1>
			<p>{content}</p>
		</>
	);
};

export class AppThree extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		// intialize işlemi.
		// state ilk değer contructorda atanır.
		// this keyword ile tanımlı değişkenler. super keyword den sonra yazılmalıdır.
		this.state = { count: 0 };
		// methodları event olarak tanımlıyarak sorunu çözdük.
		this.onclickTwo = this.onclickTwo.bind(this);
	}

	onclickOne = () => {
		alert('Click 1');
		this.setState({ count: this.state.count + 1 });
	};

	onclickTwo() {
		alert('Click 2');
		this.setState({ count: this.state.count + 1 });
	}

	render() {
		return (
			<>
				<p>count: {this.state.count}</p>
				{this.props.title}
				<button onClick={this.onclickOne}>Click Arrow Func</button>
				<button onClick={this.onclickTwo}>Click Method</button>
			</>
		);
	}
}



function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
