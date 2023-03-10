import { ethers } from "ethers";
import Contract from "../artifacts/contracts/YouTube.sol/YouTube.json";
import { contractAddress } from "../config";

export default function getContract() {
  // Creating a new provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Getting the signer
  const signer = provider.getSigner();
  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(contractAddress, Contract.abi, signer);
  // Returning the contract
  return contract;
}
