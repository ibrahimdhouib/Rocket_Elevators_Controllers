
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
        for(let i = 0; i < this.column.elevatorList.length; i++){
            let elevator = this.column.elevatorList[i];
            if (elevator.Status == "STOPPED" && elevator_Floor == CurrentFloor && elevator.direction == Currentdirection) {
                return bestelevator(elevator, Currentdirection, CurrentFloor)
            }
            else if (elevator.Status === "IDLE" && elevator.floor === CurrentFloor){
                return bestelevator(elevator, Currentdirection, CurrentFloor)
            }
            else if (elevator.Floor < CurrentFloor && (elevator.Status === "MOVING" || "STOPPED") && elevator.Direction === Currentdirection){  
                return bestelevator(elevator, Currentdirection, CurrentFloor)
            }
            else if (elevator.Floor > CurrentFloor && (elevator.Status === "MOVING" || "STOPPED") && elevator.Direction === Currentdirection){
                return bestelevator(elevator, Currentdirection, CurrentFloor)
            }
            else if (elevator.Status === "IDLE"){
                return this.bestelevator(elevator, Currentdirection, CurrentFloor);
            }
        }
    }
}




