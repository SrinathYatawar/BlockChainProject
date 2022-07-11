import React from "react";
import './userdata.css';

import { TransactionContext } from "../Context/TransactionsContext";
import { useContext } from "react";
import {str} from "../utilits/str";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-nonet border-none text-sm blue-glassmorphism"
      min={0}
    />
  );

function Userdata(){

     const {connectWallet,currentAccount,addMoney,amountIn,showMoney,handleChange,formData,AddEmployee}=useContext(TransactionContext);

     const HandleSubmit=async(e)=>{
       const {addressTo,Name,Amount,EmployeeID}=formData;

       e.preventDefault();

       if(!addressTo||!Name||!Amount||!EmployeeID) return;

       AddEmployee();
  
     }

    return(
        <div style={{display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-evenly'}}>
        <div style={{display:'inline-block'}}>
            <h3>Now Pay Your Company Salary Through Secured <br></br> way Using BlockChain.</h3>
            <hr style={{height:'0.4rem'}}/>
           {!currentAccount ?
            <button type="submit" className="
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
            onClick={connectWallet}>Connect To Wallet!</button>
                 :
             <div>
              <span style={{backgroundColor:'#002244',color:'white'}}>Account:-</span><b><span> {str(currentAccount)}</span></b>
              <hr style={{height:'0.2rem'}}/>
              <span  style={{backgroundColor:'#002244',color:'white'}}>ETH:-</span><b>{amountIn ? 
                            <><span> {amountIn/10**18} </span><span style={{backgroundColor:'#CFB53B'}}>ETH</span></>:
                            <>
                            <button type="submit" className="
                            px-6
                            py-2.5
                            bg-blue-600
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:bg-blue-700 hover:shadow-lg
                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-blue-800 active:shadow-lg
                            transition
                            duration-150
                            ease-in-out"
                            onClick={showMoney}
                            style={{position:"relative",left:'1rem'}}
                           >Show</button>  </> }</b>
             </div>
}
           <hr style={{height:'0.4rem'}}/>
            <button type="submit" className="
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
            onClick={addMoney}
           >Add Money To Contract!</button>
        </div>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <h1>Employee Details</h1>
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
              <Input placeholder="Name" name="Name" type="text"  handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="Amount" type="number"  handleChange={handleChange} />
            <Input placeholder="EmployeeID" name="EmployeeID" type="text"  handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <button type="submit" className="
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
            onClick={HandleSubmit}
            >Add Employee</button>
            </div>
      </div>
    )
}
export default Userdata;