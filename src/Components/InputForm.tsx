import * as React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { ListOfStashPoints } from "./ListOfStashPoints";

import { requestCityStashPoints } from "../utils/requestCityStashPoints";

interface IState {
	city: string;
	inputVisible: boolean;
	data: any;
	isLoading: boolean;
	openLate: boolean;
	showStashPoints: boolean;
}

export class InputForm extends React.Component<{}, IState> {
	public state: IState = {
		city: "",
		inputVisible: true,
		data: [],
		isLoading: false,
		openLate: false,
		showStashPoints: false
	};

	public render() {
		return (
			<div>
				{this.state.inputVisible ? (
					<Form>
						<FormGroup>
							<h2> Search for five star stashpoints in {this.state.city} </h2>

							<Input
								id="cityInput"
								placeholder="Enter a city."
								onChange={this.cityInputUpdated}
							/>
							<FormGroup check={true}>
								<Label check={true}>
									<Input
										type="checkbox"
										onClick={this.onOpenLateCheckboxClick}
									/>
									Open late?
								</Label>
							</FormGroup>
						</FormGroup>

						<Button
							color="primary"
							onClick={this.searchForStashPoints}
							disabled={this.state.city.length === 0}
						>
							Submit
						</Button>
					</Form>
				) : null}
				{this.state.isLoading ? (
					<div className="loader">Loading...</div>
				) : (
					<div>
						{this.state.showStashPoints ? (
							<ListOfStashPoints data={this.state.data} />
						) : null}
					</div>
				)}
			</div>
		);
	}

	private cityInputUpdated = (e: any) => {
		this.setState({
			city: e.target.value
		});
	};

	private onOpenLateCheckboxClick = (e: any) => {
		this.setState({
			openLate: !this.state.openLate
		});
	};

	private searchForStashPoints = (e: any) => {
		this.setState({
			city: e.target.value,
			inputVisible: !this.state.inputVisible
		}),
			this.getStashPointsByCity(this.state.city);
	};

	private getStashPointsByCity = async (city: string) => {
		this.setState({
			isLoading: !this.state.isLoading
		});

		const stashpoints = await requestCityStashPoints(city, this.state.openLate);

		this.setState({
			data: stashpoints,
			isLoading: !this.state.isLoading,
			showStashPoints: !this.state.showStashPoints
		});
	};
}
