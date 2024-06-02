// RepeatContract.js
import Web3 from 'web3';
import {contractABI, contractAddress} from '../constants/contract'

let web3;
let contract;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  web3 = new Web3(window.ethereum);
  window.ethereum.request({ method: 'eth_requestAccounts' });
} else {
  const provider = new Web3.providers.HttpProvider('https://scroll-sepolia.drpc.org');
  web3 = new Web3(provider);
}

contract = new web3.eth.Contract(contractABI, contractAddress);

export const createHabit = async (name, goal, target, remainder, points, account) => {
  return await contract.methods.createHabit(name, goal, target, remainder, points).send({ from: account });
};

export const createChallenge = async (name, totalStackAmount, perPersonStake, habitsIncluded, account, value) => {
  return await contract.methods.createChallenge(name, totalStackAmount, perPersonStake, habitsIncluded).send({ from: account, value });
};

export const joinChallenge = async (challengeName, account, value) => {
  return await contract.methods.joinChallenge(challengeName).send({ from: account, value });
};

export const completeHabit = async (habitName, account) => {
  return await contract.methods.completeHabit(habitName).send({ from: account });
};

export const completeChallenge = async (challengeName, account) => {
  return await contract.methods.completeChallenge(challengeName).send({ from: account });
};

export const getChallengeParticipants = async (challengeName) => {
  return await contract.methods.getChallengeParticipants(challengeName).call();
};

export const claimPointsForHabit = async (habitName, account) => {
  return await contract.methods.claimPointsForHabit(habitName).send({ from: account });
};

export const claimStakedAmount = async (challengeName, account) => {
  return await contract.methods.claimStakedAmount(challengeName).send({ from: account });
};
