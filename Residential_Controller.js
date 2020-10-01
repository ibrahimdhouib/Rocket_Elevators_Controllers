
class ElevatorController {
    constructor(NumbersOfFloors, NumbersOElevators){
        console.log('Controller created with : ', NumbersOfFloors, NumbersOfElevators);
        this.column = new column(NumberOfFloors, NumberOfElevators);
    }

    RequestElevator(CurrentFloor, Currentdirection){
        console.log('requestelevator', CurrentFloor, Currentdirection);
        let elevator = this.FindElevator(CurrentFloor, Currentdirection);
        elevator.sendRequest(CurrentFloor);
        return elevator;
    }

    RequestFloor(Elevator, RequestFloor){
        elevator.sendrequest(RequestFloor);
    }

    findbestelevator(CurrentFloor, Currentdirection){
        for}

