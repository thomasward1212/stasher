import * as React from "react";
import {
	Button,
	Card,
	CardBody,
	CardSubtitle,
	CardText,
	CardTitle
} from "reactstrap";

interface IProps {
	data: any;
}
export class ListOfStashPoints extends React.Component<IProps, {}> {
	public render() {
		return (
			<div>
				<h2>Stash Points</h2>

				<div>
					{this.props.data.length === 0 ? (
						<p>
							If none have been returned please enter another city{" "}
							<a href="/"> here. </a>
						</p>
					) : null}
				</div>
				{this.props.data.map((point: any, index: number) => {
					return (
						<div key={index}>
							<Card>
								<CardBody>
									<CardTitle>{point.name}</CardTitle>
									<CardSubtitle>{point.address}</CardSubtitle>
									<CardText>{point.description}</CardText>
									<CardText>
										Contact number: {point.contact.phone_number}
									</CardText>
									<Button
										href={`https://www.google.co.uk/maps/place/${
											point.address
										}`}
										color="primary"
									>
										View on google maps!
									</Button>
								</CardBody>
							</Card>
							<p>
								Try another
								<a href="/"> location. </a>
							</p>
						</div>
					);
				})}
			</div>
		);
	}
}
