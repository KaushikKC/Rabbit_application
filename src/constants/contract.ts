export const contractAddress = '0x30c0443FC0a13c241F463c955189d5B942582d8C';

export const contractABI = 
    [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "challenges",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "totalStackAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "perPersonStake",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "completed",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_habitName",
                    "type": "string"
                }
            ],
            "name": "claimPointsForHabit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_challengeName",
                    "type": "string"
                }
            ],
            "name": "claimStakedAmount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_challengeName",
                    "type": "string"
                }
            ],
            "name": "completeChallenge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_habitName",
                    "type": "string"
                }
            ],
            "name": "completeHabit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_totalStackAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_perPersonStake",
                    "type": "uint256"
                },
                {
                    "internalType": "string[]",
                    "name": "_habitsIncluded",
                    "type": "string[]"
                }
            ],
            "name": "createChallenge",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_goal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_target",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_remainder",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_points",
                    "type": "uint256"
                }
            ],
            "name": "createHabit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "generalHabits",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "goal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "target",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "remainder",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "points",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_challengeName",
                    "type": "string"
                }
            ],
            "name": "getChallengeParticipants",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "habits",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "goal",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "target",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "remainder",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "points",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_challengeName",
                    "type": "string"
                }
            ],
            "name": "joinChallenge",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "userPoints",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
  
