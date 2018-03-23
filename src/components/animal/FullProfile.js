'use babel';

import React from 'react';

export default class FullProfile extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			animal : this.props.animal
		}

	}

	render() {
		if (this.props.animal)
			return  (
				<div className = "box cal">
					<h3>Animal Details</h3>
					<br></br>
					<div className = "box">
						<h6>Name:</h6> {this.props.animal.AnimalName} <br></br>
						<h6>Sex:</h6> {this.props.animal.Sex} <br></br>
						<h6>Breed:</h6> {this.props.animal.Breed} <br></br>
						<h6>Color:</h6> {this.props.animal.Colour} <br></br>
						<h6>Age:</h6> {this.props.animal.Age} yrs<br></br>
						<h6>Tag Ref:</h6> {this.props.animal.TagRef} <br></br>
						<h6>Neutered/Spayed:</h6> {this.props.animal.NeuteredSpayed ? 'Yes' : 'No'}<br></br>
						<h6>ShareKennel:</h6> {this.props.animal.ShareKennel} <br></br>
						<h6>Bites:</h6> {this.props.animal.Bites} <br></br>
						<h6>Notes:</h6> {this.props.animal.AnimalNotes} <br></br>
					</div>
					<br></br>
					<div className = "box">
						<h4>Food</h4>
						<h6>Type A:</h6> {this.props.animal.Food1TypeName} <br></br>
						<h6>Amount:</h6> {this.props.animal.Food1Amount}  Freq: {this.props.animal.Food1Freq} <br></br>
						<h6>Type B:</h6> {this.props.animal.Food2TypeName} <br></br>
						<h6>Amount:</h6> {this.props.animal.Food2Amount}  Freq: {this.props.animal.Food2Freq} <br></br>
						<h6>Notes:</h6> {this.props.animal.FoodNote} <br></br>
						<h6>FoodChews:</h6> {this.props.animal.FoodChews ? 'Yes' : 'No'}<br></br>
					</div>
					<br></br>
					<div className = "box">
						<h4>Medical</h4>
						<h6>Medical Conditions:</h6> {this.props.animal.MedicalConditions} <br></br>
					</div>
				</div>
			);
		else
			return <div className = "box cal"><h3>Animal Details</h3></div>;
	}
}

