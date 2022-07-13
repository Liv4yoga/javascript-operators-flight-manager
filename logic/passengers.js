function Passengers() {
    function checkFlightCapacity(flightcapacity, passengersArray){
        let passengersNumber = 0;
        let passengers;

        for(passengers of passengersArray){
            passengersNumber += passengers;
        }

        if (passengersNumber > flightCapacity){
            throw new Error("Flight capacity ("Flight capacity (" + flightCapacity + ") exceeded, You have " + passengersNumber"");
        }

        return passengersNumber;
    
    }

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, businessSeatsPerFlight, economySeatsPerFlight ){
            let vipPassengersWithBusinessSeats = 0, vipPassengersWithEconomySeats=0;
            regularPassengersWithBusinessSeats=0, regularPassengersWithEconomySeats=o;
            let availableBusinessSeats = nrOfFlights * businessSeatsPerFlight;
            let availableEconomySeats = nrOfFlights * economySeatsPerFlight;

            var vipBusinessConfiguration = {passengers:vipPassengers, seats:availableBusinessSeats};
            vipPassengersWithBusinessSeats = updateConfiguration(vipBusinessConfiguration, businessSeatsPerFlight);

            var vipEconomyConfiguration = {passenders:vipBusinessConfiguration.passengers, 
            seats:availableEconomySeats};
            vipPassengersWithEconomySeats = updateConfiguration(vipEconomyConfiguration, economySeatsPerFlight);

            var regularBusinessConfiguration = {passengers:regularPassengers, seats:vipBusinessConfiguration.seats};
            regularPassengersWithBusinessSeats = updateConfiguration(regularBusinessConfiguration, businessSeatsPerFlight);

            var regularEconomyConfiguration = {passenders:regularBusinessConfiguration.passengers, seats:vipEconomyConfiguration.seats};
            regularPassengersWithEconomySeats = updateConfiguration(regularEconomyConfiguration, economySeatsPerFlight);

            return {vipPassengersWithBusinessSeats:vipPassengersWithBusinessSeats,
            vipPassengersWithEconomySeats:vipPassengersWithEconomySeats,
            regularPassengersWithBusinessSeats:regularPassengersWithBusinessSeats,
            regularPassengersWithEconomySeats:regularPassengersWithEconomySeats};
    }

    function updateConfiguration(configuration, seatsPerFlight){
        let passengersWithSeats = 0;

        while (configuration.passengers > 0) {
            if (configuration.seats > 0){
                    if (configuration.passengers >= configuration.seats){
                        if (configuration.seats > configuration.seatsPerFlight){
                            configuration.passengers -= seatsPerFlight;
                            configuration.seats -= seatsPerFlight;
                            passengersWithSeats += seatsPerFlight;
                        } else {
                            configuration.passengers -= configuration.seats;
                            passengersWithSeats += configuration.seats;
                            configuration.seats =0;
                        }
                    } else{
                        passengerWithSeats += configuration.passengers;
                        configuration.seats -= configuration.passengers;
                        configuration.passengers = 0;
                    }
            } else {
                break;
            }
        }
        return passengersWithSeats;
    }
    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports=Passengers();

