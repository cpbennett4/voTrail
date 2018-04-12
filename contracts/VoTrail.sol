pragma solidity 0.4.17;

import "node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol";


contract VoTrail is Ownable {

    event NewVolunteerEvent(uint volunteerEventId, string name, uint date, uint duration, uint cost);

    struct VolunteerEvent {
        string name;
        uint32 date;
        uint8 duration;
        uint8 cost;
    }

    VolunteerEvent[] public volunteerEvents;

    function recordVolunteerEvent(string _name, uint32 _date, uint8 _duration, uint8 _cost) public {
        uint eventId = volunteerEvents.push(VolunteerEvent(_name, _date, _duration, _cost)) - 1;
        NewVolunteerEvent(eventId, _name, _date, _duration, _cost);
    }

}