import time
WaitingTime = 1

class ElevatorController:
    def __init__(self, NumberOfFloors, NumberOfElevators):
        self.NumberOfFloors = NumberOfFloors
        self.NumberOfElevators = NumberOfElevators
        self.column = Column(NumberOfFloors, NumberOfElevators)
        print("Controller iniatiated")

#   ---------here is where we are going to find the best elevetir and send the resquest-----------------------------------------------------------------------------

    def RequestElevator(self, currentFloor, currentDirection,WaitingTime):
        time.sleep(WaitingTime)
        print("---------------------------------------------------")
        print("Request elevator to floor : ", currentFloor)
        time.sleep(WaitingTime)
        print("---------------------------------------------------")
        print("Call Button Light On")
        time.sleep(WaitingTime)
        elevator = self.find_best_elevator(currentFloor, currentDirection)
        elevator.send_request(currentFloor,WaitingTime)
        return elevator
# ----------send the request floor to send request------------------------------------------------------

    def RequestFloor(self, elevator, RequestFloor,WaitingTime):
        time.sleep(WaitingTime)
        print("---------------------------------------------------")
        print("Requested floor : ", RequestFloor)
        time.sleep(WaitingTime)
        print("---------------------------------------------------")
        print("Request Button Light On")
        time.sleep(WaitingTime)
        elevator.send_request(RequestFloor,WaitingTime)

#  -------------determine the best elevar for the call floor-------------------------------------------------------------------------

    def find_best_elevator(self, currentFloor, currentDirection):
        bestElevator = None
        BestDistance = 1000
        for elevator in (self.column.elevatorList):
            if (currentFloor == elevator.elevator_floor and (elevator.status == "stopped" or elevator.status == "idle" or elevator.status == "moving")):
                return elevator
            else:
                newDistance = abs(currentFloor - elevator.elevator_floor)
                if BestDistance > newDistance:
                    BestDistance = newDistance
                    bestElevator = elevator

                elif elevator.currentDirection == currentDirection:
                    bestElevator = elevator

        return bestElevator


class Elevator:
    def __init__(self, ElevatorN, status, elevator_floor, elevator_currentDirection):
        self.ElevatorN = ElevatorN
        self.status = status
        self.elevator_floor = elevator_floor
        self.elevator_currentDirection = elevator_currentDirection
        self.floor_list = []
#  -------------here is the stage before operate the elevator-------------------------------------------------------------------------

    def send_request(self, RequestFloor,waitingTime):
        self.floor_list.append(RequestFloor)
        self.addFloorList(RequestFloor,waitingTime)
        self.moveElevator(RequestFloor,waitingTime)

# -------------here is the stage before operate the elevator-------------------------------------------------------------------------

    def addFloorList(self):
        if self.elevator_currentDirection == "up":
            self.floor_list.sort()
        elif self.elevator_currentDirection == "down":
            self.floor_list.sort()
            self.floor_list.reverse()
        return self.floor_list

 # -------------here is the stage before operate the elevator-------------------------------------------------------------------------

    def moveElevator(self, RequestFloor,waitingTime):
        while (len(self.floor_list) > 0):
            if ((RequestFloor == self.elevator_floor)):
                self.openDoors(waitingTime)
                self.status = "moving"

                self.floor_list.pop()
            elif (RequestFloor < self.elevator_floor):

                self.status = "moving"
                print("---------------------------------------------------")
                print("Elevator", self.ElevatorN, self.status)
                print("---------------------------------------------------")
                self.currentDirection = "down"
                self.Move_down(RequestFloor,1)
                self.status = "stopped"
                print("---------------------------------------------------")
                print("Elevator", self.ElevatorN, self.status)
                print("---------------------------------------------------")
                self.openDoors(waitingtime)
                self.floor_list.pop()
            elif (RequestFloor > self.elevator_floor):

                time.sleep(WaitingTime)
                self.status = "moving"
                print("---------------------------------------------------")
                print("Elevator", self.ElevatorN, self.status)
                print("---------------------------------------------------")
                self.currentDirection = "up"
                self.Move_up(RequestFloor)
                self.status = "stopped"
                print("---------------------------------------------------")
                print("Elevator", self.ElevatorN, self.status)
                print("---------------------------------------------------")

                self.openDoors(waitingtime)

                self.floor_list.pop()

        if self.floor_list == 0:
            self.status = "idle"


# -------------open and close door-----------------------------------------------------------------------------

    def openDoors(self,waitingTime):
        time.sleep(WaitingTime)
        print("Open Door")
        print("---------------------------------------------------")
        print("Button Light Off")
        time.sleep(WaitingTime)
        print("---------------------------------------------------")
        time.sleep(WaitingTime)
        self.closeDoors(waitingTime)

    def closeDoors(self,waitingTime):
        print("close door")
        time.sleep(WaitingTime)


# -------------MOVE THE ELEVATOR---------------------------------------------------------------------------------

    def Move_up(self, RequestFloor,WaitingTime):
        print("Floor : ", self.elevator_floor)
        time.sleep(WaitingTime)
        while(self.elevator_floor != RequestFloor):
            self.elevator_floor += 1
            print("Floor : ", self.elevator_floor)
            time.sleep(WaitingTime)

    def addFloorList(self, RequestFloor,WaitingTime):
        print("Floor : ", self.elevator_floor)
        time.sleep(WaitingTime)
        while(self.elevator_floor != RequestFloor):
            self.elevator_floor -= 1
            print("Floor : ", self.elevator_floor)
            time.sleep(WaitingTime)


class Call_button:
    def __init__(self, currentFloor, currentDirection):
        self.currentFloor = currentFloor
        self.currentDirection = currentDirection
        self.light = False


class Floor_button:
    def __init__(self, RequestFloor):
        self.RequestFloor = RequestFloor


class Column:
    def __init__(self, NumberOfFloors, NumberOfElevators):
        self.NumberOfFloors = NumberOfFloors
        self.NumberOfElevators = NumberOfElevators
        self.elevatorList = []
        for i in range(NumberOfElevators):
            elevator = Elevator(i, "idle", 1, "up")
            self.elevatorList.append(elevator)


# // // //------------- WORKINGGGG - -------------//// //

controller = ElevatorController(10, 2)
controller.column.elevatorList[0].elevator_floor = 2

controller.column.elevatorList[0].status = "moving"
controller.column.elevatorList[0].elevator_currentDirection = "down"
controller.column.elevatorList[1].elevator_floor = 6

controller.column.elevatorList[1].status = "moving"
controller.column.elevatorList[1].elevator_currentDirection = "down"

elevator = controller.RequestElevator(5, "up",1)
controller.RequestFloor(elevator, 7,1)
print("==============================")
print("scene 1 ended")
print("==============================")
# // // //---------------------------------------//// //

# //////------------- WORKING - -------------//// //
# controller = ElevatorController(10, 2)
# controller.column.elevatorList[0].elevator_floor = 10
# controller.column.elevatorList[0].status = "moving"
# controller.column.elevatorList[0].elevator_currentDirection = "down"
# controller.column.elevatorList[1].elevator_floor = 3
# controller.column.elevatorList[1].status = "moving"
# controller.column.elevatorList[1].elevator_currentDirection = "down"


# elevator = controller.RequestElevator(1, "up",1)
# controller.RequestFloor(elevator, 6)
# elevator = controller.RequestElevator(3, "up",1)
# controller.RequestFloor(elevator, 5)
# elevator = controller.RequestElevator(9, "down",1)
# controller.RequestFloor(elevator, 2)
# print("==============================")
# print("scene 2 ended")
# print("==============================")
#     // ////---------------------------------------//// //


#     //////------------- WORKINGGGG - -------------//// //

# controller = ElevatorController(10, 2)

# controller.column.elevatorList[0].elevator_floor = 10
# controller.column.elevatorList[0].status = "moving"
# controller.column.elevatorList[0].elevator_currentDirection = "down"
# controller.column.elevatorList[1].elevator_floor = 3
# controller.column.elevatorList[1].status = "moving"
# controller.column.elevatorList[1].elevator_currentDirection = "down"

# print(controller.column.elevatorList)
# elevator = controller.RequestElevator(10, "down")
# controller.RequestFloor(elevator, 3)

# elevator = controller.RequestElevator(3, "down")
# controller.RequestFloor(elevator, 2)
# print("==============================")
# print("scene 3 ended")
# print("==============================")

