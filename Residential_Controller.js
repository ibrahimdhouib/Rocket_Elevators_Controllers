class column{
    constructor(NumberOfFloors, NumberOfElevators){
        this.NumberOfFloors = NumberOfFloors;
        this.numbersofelevators = NumberOfElevators;
        this.callbutton = [];
        this.numbersofcallbutton = ((NumberOfFloors*2)-2);
        this.elevatorList = [];

        for (let i=0; i < NumberOfElevators; i++){
            let elevator = new Elevator(i, "IDLE", 1, null, "CLOSED")
            this.elevatorlist.push(elevator)
        }
        console.log('Column created', this);
    }
}

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

class Elevator {
    constructor (ElevatorN, status, elevator_floor, elevator_currentDirection, Doorstatus){
        this.ElevatorN = ElevatorN;
        this.status = status;
        this.elevator_floor = elevator_floor;
        this.floorList = [];
        this.elevator_currentDirection = elevator_currentDirection;
        this.doorStatus = doorStatus;
        this.requestfloorbutton = []
    }

    sendRequest(RequestFloor){
        console.log('send request', RequestFloor);
        this.floorList.push(RequestFloor);
        this.sort_addFloorList();
        this.controlelevator(RequestFloor);
    }

    addFloorList(floor_list){
        console.log("Entered FloorList in elevator");
        if (this.elevator_currentDirection === "UP") {
            this.floor_list.sort();
        }
        else if (this.elevator_currentDirection === "DOWN") {
            this.floor_list.sort().reverse();
        }
        let Newfloorlist = FloorList;
        return Newfloorlist;
    }


