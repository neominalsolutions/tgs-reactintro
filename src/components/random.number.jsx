import { useState } from 'react';
import PropTypes from 'prop-types';

function RandomNumber({ randomNumber }) {
	const [number, setNumber] = useState(randomNumber);
	const [visible, setVisible] = useState(false);

	const generateNumber = () => {
		setNumber(Math.round(Math.random() * 100));
	};

	return (
		<>
			<input
				type="checkbox"
				value={visible}
				onChange={() => {
					setVisible(!visible);
				}}
			/>
			{visible && <div>Check Box State: Seçili</div>}
			<p hidden={!visible}>Göster/Gizle</p>
			Visible State: {visible ? 'Seçili' : 'Seçili Değil'}
			<br></br>
			<p>Random Number: {number}</p>
			<button onClick={generateNumber}>Generate</button>
		</>
	);
}

RandomNumber.propTypes = {
	randomNumber: PropTypes.number,
};

export default RandomNumber;
