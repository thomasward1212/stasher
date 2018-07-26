export const requestCityStashPoints = (city: string, openLate: boolean) => {
	return new Promise((resolve, reject) => {
		fetch(
			`https://api-staging.stasher.com/v1/stashpoints?city=${city}&open_late=${openLate}`
		)
			.then(resp => resp.json())
			.then(data => {
				resolve(data.filter((point: any) => point.rating === 5));
			})
			.catch(err => {
				reject(err);
			});
	});
};
