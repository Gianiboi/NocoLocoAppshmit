export default {
	PassengerIDFieldonSubmit () {
		PassengerIDField.setValue(UUID.generate());
	},
	isAircraftFull (aircraftID) {
		find_aircraft.run()
		let aircraft = find_aircraft.data.find((element) => (element.aircraftId) == aircraftID)
		if (aircraft.)
	}
}
