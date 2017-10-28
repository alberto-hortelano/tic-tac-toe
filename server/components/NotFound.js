import React from 'react';
import { Helmet } from "react-helmet";

class NotFound extends React.Component {

	render() {
		//console.log('NotFound .props',this.props);
		return (
			<div className="board-row">
				<Helmet>
					<title>Not found</title>
				</Helmet>
				404 - Not found
			</div>
		);
	}
}

export default NotFound;
