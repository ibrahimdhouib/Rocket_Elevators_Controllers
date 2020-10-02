

function ElevatorController(NumberOfFloors, NumberOfElevators) {
    var syst = new ElevatorController(NumberOfFloors, NumberOfElevators);

    return syst;
}

class Column {
    constructor(NumberOfFloors, NumberOfElevators) {

        this.NumberOfFloors = NumberOfFloors;
        this.NumberOfElevators = NumberOfElevators;
        this.elevatorList = [];

        for (let i = 0; i < this.NumberOfElevators; i++) {

            let elevator = new Elevator(i + 1, "Idle", 1, "Up");
            this.elevatorList.push(elevator);
        }
    }
}

class Elevator {

    constructor(elevatorN, status, elevator_currentfloor, elevator_currentDirection) {

        this.elevatorN = elevatorN;
        this.status = status;
        this.elevator_floor = elevator_floor;
        this.elevator_currentDirection = elevator_currentDirection;
        this.floor_list = [];
    }

    addFloorList(RequestFloor) {

        this.floor_list.push(RequestFloor);
        this.sortFloorList();
        this.moveElevator(RequestFloor);
    }

    sortFloorList() {
        if (this.elevator_currentDirection === "Up") {
            this.floor_list.sort();
        } else if (this.elevator_currentDirection === "Down") {
            this.floor_list.sort();
            this.floor_list.reverse();
        }
        return this.floor_list;
    }

//-------------MOVE  ELEVATOR---------------------------------------------------------------------------------

    moveElevator(RequestFloor) {
        while (this.floor_list > 0) {
            if (RequestFloor === this.elevator_floor) {
                this.openDoors();
                this.status = "Moving";

                this.floor_list.shift();
            } else if (RequestFloor < this.elevator_floor) {
                this.status = "Moving";
                console.log("Elevator " + this.elevatorN + " is selected");
                console.log("Elevator " + this.elevatorN, this.status);
                console.log("");
                this.Direction = "Down";
                this.moveDown(RequestFloor);
                this.status = "Stopped";
                console.log("");
                console.log("Elevator " + this.elevatorN, this.status);
                console.log("");
                this.openDoors();
                this.floor_list.shift();
            } else if (RequestFloor > this.elevator_floor) {
                time(1000);
                this.status = "Moving";
                console.log("");
                console.log("Elevator " + this.elevatorN + " is selected");
                console.log("Elevator " + this.elevatorN, this.status);
                console.log("");
                this.Direction = "Up";
                this.moveUp(RequestFloor);
                this.status = "Stopped";
                console.log("");
                console.log("Elevator " + this.elevatorN, this.status);
                console.log("");

                this.openDoors();

                this.floor_list.shift();
            }
        }
        if (this.floor_list === 0) {
            this.status = "Idle";
        }
    }


    Request_floor_button(RequestFloor) {

        this.RequestFloor = RequestFloor;
        this.floorLights = floorLights;
    }

    Call_floor_button(currentfloor,  currentDirection) {

        this.currentfloor = currentfloor;
        this.currentDirection = currentDirection;
    }

// ------------- open Doors// close Doors -----------------------------------------------------------------------------

    openDoors() {
        time(1000);
        console.log("Doors opening");
        console.log("Doors opened");
        console.log("");
        console.log("Button light-off");
        time(1000);

        console.log("");
        time(1000);
        this.Close_door();
    }
    Close_door() {
        console.log("Closing doors");
        console.log("Doors' not obstructed : OK")
        console.log("Elevator's capacity check: OK ")
        console.log("Doors Closed")
        time(1000);
    }

// -------------MOVE  ELEVATOR---------------------------------------------------------------------------------


    moveUp(RequestFloor) {
        console.log("Floor : " + this.elevator_floor);
        time(1000);
        while (this.elevator_floor !== RequestFloor) {
            this.elevator_floor += 1;
            console.log("Floor : " + this.elevator_floor);

            time(1000);
        }
    }

    moveDown(RequestFloor) {
        console.log("Floor : " + this.elevator_floor);
        time(1000);
        while (this.elevator_floor !== RequestFloor) {
            this.elevator_floor -= 1;
            console.log("Floor : " + this.elevator_floor);

            time(1000);
        }
    }
}


class ElevatorController {
    constructor(NumberOfFloors, NumberOfElevators) {
        this.NumberOfFloors = NumberOfFloors;
        this.NumberOfElevators = NumberOfElevators;
        this.column = new Column(NumberOfFloors, NumberOfElevators);


        console.log("System is starting");
    }


//------------------------Request Elevator---------------------------------------------------------------

    RequestElevator(currentfloor, currentDirection) {
        time(1000);
        console.log("");
        console.log("Request elevator to floor : ", currentfloor);
        time(1000);
        console.log("");
        console.log("Call button illuminated");
        time(1000);

        let elevator = this.Find_Best_elevetor(currentfloor, currentDirection);
        elevator.addFloorList(floor);
        return elevator;
    }

// ----------------------Request Floor-------------------------------------------------------------------

    RequestFloor(elevator, RequestFloor) {
        time(1000);
        console.log("");
        console.log("The floor number " + RequestFloor + " is requested");
        time(1000);
        console.log("");
        console.log("Request button illuminated");
        time(1000);
        elevator.addFloorList(RequestFloor);

    }
    
    
//  -------------Find the Best elevator-----------------------------------------------------
    
    Find_Best_elevetor(currentfloor, currentDirection) {

        let Bestelevator = null;
        let Bestdistance = 1000;
        for (let i = 0; i < this.column.elevatorList.length; i++) {
            let elevator = this.column.elevatorList[i];

            if (floor === elevator.elevator_floor && (elevator.status === "Stopped" || elevator.status === "Idle" || elevator.status === "Moving")) {
                return elevator;
            } else {
                let newdistance = Math.abs(floor - elevator.elevator_floor);
                if (shortestDistance > newdistance) {
                    Bestdistance = newdistance;
                    Bestelevator = elevator;

                    if (elevator.Direction === Direction) {
                        Bestelevator = elevator;
                    }
                }
            }
        }
        returnBestelevator;
    }
}
 //-------------WaitingTime-----------------------------------------------------

function time( WaitingTime ) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start >  WaitingTime ) {
            break;
        }
    }
}




// -----------------Test-----------------------------------------------------

function TestElevator() {

    var Scenario = initSystem(10, 2);
    var elevatorOne = Scenario.column.elevatorList[0];
    var elevatorTwo = Scenario.column.elevatorList[1];


    //Scenario 1 

    elevatorOne.currentfloor = 2;                           
    elevatorOne.status = "Idle";
    elevatorOne.currentDirection = "Up";

    elevatorTwo.currentfloor = 6;                           
    elevatorTwo.status = "Idle";
    elevatorTwo.currentDirection = "Down";

    var elevator = Scenario.RequestElevator(3, "Up");       
    Scenario.RequestFloor(elevator, 7);                       

    console.log("")

    console.log("")
    console.log("---Test scenario 1 : Ok++")                
    console.log("")
    console.log("+++")

    //Scenario 2 

    elevatorOne.currentfloor = 10;     
    elevatorOne.status = "Idle";
    elevatorOne.currentDirection = "Up";

    elevatorTwo.currentfloor = 3;                    
    elevatorTwo.status = "Idle";
    elevatorTwo.currentDirection = "Up";

    var elevator = Scenario.RequestElevator(1, "Up");        
    Scenario.RequestFloor(elevator, 6);                      

    elevator = Scenario.RequestElevator(3, "Up");            
    Scenario.RequestFloor(elevator, 5);                     

    elevator = Scenario.RequestElevator(9, "Down");            
    Scenario.RequestFloor(elevator, 2);                       

    console.log("");
    console.log("---Test scenario 2 : Ok++");
    console.log("");
    console.log("+++")

//Scenario 3

    elevatorOne.currentfloor = 10;
    elevatorOne.status = "Idle";
    elevatorOne.currentdirection = "Down";

    elevatorTwo.currentfloor = 3;
    elevatorTwo.status = "Moving";
    elevatorTwo.currentdirection = "Up";


    var elevator = Scenario.RequestElevator(3, "Down");

    Scenario.RequestFloor(elevator, 2);
    elevator = Scenario.RequestElevator(10, "Down");
    Scenario.RequestFloor(elevator, 3);


    console.log("");
    console.log("---Test scenario 3 : Ok++")
    console.log("");
    console.log("+++")
