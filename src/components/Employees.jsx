import React from "react";
import {TransactionContext} from "../Context/TransactionsContext";
import {str} from "../utilits/str";

const EmployeeCard = ({addressTo,Name,Amount,Paid,timeStamp}) => {

    return (
      <div className="bg-[#181918] m-4 flex flex-1
        2xl:min-w-[450px]
        2xl:max-w-[500px]
        sm:min-w-[270px]
        sm:max-w-[300px]
        min-w-full
        flex-col p-3 rounded-md hover:shadow-2xl"
      >
        <div className="flex flex-col items-center w-full mt-3">
          <div className="display-flex justify-start w-full mb-6 p-2">
            <a href={`https://ropsten.etherscan.io/address/`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">To: {str(addressTo)}</p>
            </a>
            <a href={`https://ropsten.etherscan.io/address/`} target="_blank" rel="noreferrer">
              <p className="text-white text-base">Name: {Name}</p>
            </a>
            <p className="text-white text-base">Amount:{Amount}ETH</p>
            <p className="text-white text-base">Paid: {Paid?" Yes":" NO"}</p>
          </div>
          <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
            <p className="text-[#37c7da] font-bold">{timeStamp}</p>
          </div>
        </div>
      </div>
    )
  }


function Employees(){

    const {Employees,PayNow,ChangeTheState}=React.useContext(TransactionContext);
   // console.log(Employees);

    return(
       <div style={{    textAlign: 'center'}}>
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
            onClick={PayNow}
            >Pay Salary To Employers!</button>
            <hr style={{height:'0.5rem'}}/>
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
            onClick={ChangeTheState}
            >Set A Reminder For Next Payment</button>
            <div className="sm:w-[100%] w-full h-[0.25px] bg-gray-400 mt-5 " />
            <div className="flex flex-wrap justify-center items-center mt-10">
            {Employees.reverse().map((employee,i)=>(
                <EmployeeCard key={i} {...employee} />
            ))}
            </div>
       </div>
    )
}

export default Employees;