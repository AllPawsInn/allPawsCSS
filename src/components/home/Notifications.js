'use babel';

import React from 'react';

export default class Notifications extends React.Component {
	constructor(props) {
    	super(props) 
    }

	render() {
		return (
			<div>
			<h1>Notifications</h1>
			<ul>
				<li>Achilles/Lebron James has checked in.</li>
				<li>Max/Bruce Wayne has checked out succesfully.</li>
				<li>Marcel/Ross Geller has checked out succesfully</li>
				<li>Joe/Johnny Cash has a new booking.</li>
			</ul>
			</div>
		);
    }
}
