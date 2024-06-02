// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Repeat {
    address public owner;
    struct Habit {
        string name;
        uint256 goal;
        uint256 target;
        uint256 remainder;
        uint256 points;
    }
    
    struct Challenge {
        string name;
        uint256 totalStackAmount;
        uint256 perPersonStake;
        mapping(address => bool) participants;
        mapping(address => uint256) stakes;
        mapping(string => bool) habitsIncluded;
        address[] participantsArray;
        bool completed;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    mapping(string => Habit) public habits;
    mapping(string => Habit) public generalHabits;
    mapping(address => uint256) public userPoints;
    mapping(string => Challenge) public challenges;
    
    constructor() {
        owner = msg.sender;
       generalHabits["walking"] = Habit("walking", 30, 30, 0, 10); 
       generalHabits["drinking_water"] = Habit("drinking_water", 8, 8, 0, 5); 
       generalHabits["sleeping"] = Habit("sleeping", 7, 7, 0, 15); 
       generalHabits["reading_books"] = Habit("reading_books", 1, 1, 0, 20); 

    }
    
    // Function to create a new habit
    function createHabit(string memory _name, uint256 _goal, uint256 _target, uint256 _remainder, uint256 _points) public {
        Habit memory newHabit = Habit(_name, _goal, _target, _remainder, _points);
        habits[_name] = newHabit;
        generalHabits[_name] = newHabit;
    }
    
    // Function to create a new challenge
    function createChallenge(
        string memory _name, 
        uint256 _totalStackAmount, 
        uint256 _perPersonStake, 
        string[] memory _habitsIncluded
    ) public payable {
        require(msg.value == _perPersonStake, "Creator must stake per person stake");

        Challenge storage newChallenge = challenges[_name];
        newChallenge.name = _name;
        newChallenge.totalStackAmount = _totalStackAmount;
        newChallenge.perPersonStake = _perPersonStake;
        newChallenge.participants[msg.sender] = true;
        newChallenge.stakes[msg.sender] += _perPersonStake; // Stake per-person stake for creator
        newChallenge.participantsArray.push(msg.sender); // Add creator to participants array

        for (uint256 i = 0; i < _habitsIncluded.length; i++) {
            newChallenge.habitsIncluded[_habitsIncluded[i]] = true;
        }
    }
    
    // Function to join a challenge
    function joinChallenge(string memory _challengeName) public payable {
        require(challenges[_challengeName].participants[msg.sender] == false, "Already joined");
        uint256 totalCompletedParticipants = challenges[_challengeName].participantsArray.length;
        require(challenges[_challengeName].totalStackAmount >= (challenges[_challengeName].perPersonStake * totalCompletedParticipants) + challenges[_challengeName].perPersonStake, "Total stacking amount exceeds the limit");
        require(msg.value == challenges[_challengeName].perPersonStake, "Incorrect stake amount");

        Challenge storage selectedChallenge = challenges[_challengeName];
        selectedChallenge.participants[msg.sender] = true;
        selectedChallenge.stakes[msg.sender] += msg.value; // Stake per-person stake for participant
        selectedChallenge.participantsArray.push(msg.sender); // Add participant to participants array
    }
    
    // Function to mark habit completion
    function completeHabit(string memory _habitName) public onlyOwner {
        require(keccak256(bytes(generalHabits[_habitName].name)) == keccak256(bytes(_habitName)), "Habit not found");

        habits[_habitName].remainder--;
    }
    
    // Function to mark challenge completion
    function completeChallenge(string memory _challengeName) public onlyOwner {
        require(challenges[_challengeName].completed == false, "Challenge already completed");
        challenges[_challengeName].completed = true;
    }

    // Function to get the list of participants of a challenge
    function getChallengeParticipants(string memory _challengeName) public view returns (address[] memory) {
        return challenges[_challengeName].participantsArray;
    }
    
    // Function to claim points for habit completion
    function claimPointsForHabit(string memory _habitName) public {
        require(keccak256(bytes(generalHabits[_habitName].name)) == keccak256(bytes(_habitName)), "Habit not found");
        require(habits[_habitName].remainder == 0, "Habit not completed");

        // Add points to user's balance
        userPoints[msg.sender] += habits[_habitName].points;
    }
    
    // Function to claim the split of staked amount on challenge completion
    function claimStakedAmount(string memory _challengeName) public {
        require(challenges[_challengeName].completed == true, "Challenge not completed");
        require(challenges[_challengeName].participants[msg.sender] == true, "Not a participant");

         Challenge storage completedChallenge = challenges[_challengeName];

        uint256 totalCompletedParticipants = completedChallenge.participantsArray.length; // Total number of completed participants
        uint256 totalStakedAmount = completedChallenge.perPersonStake * totalCompletedParticipants; // Total amount staked for the challenge

        require(totalCompletedParticipants > 0, "No participants completed the challenge");

        uint256 splitAmount = totalStakedAmount / totalCompletedParticipants;

        // Transfer split amount to the caller
        payable(msg.sender).transfer(splitAmount);
    }
}
