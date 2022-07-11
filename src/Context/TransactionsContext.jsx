import React,{useState,useEffect} from "react";
import {ethers} from 'ethers';
import {ContractABI,ContractAddress} from '../utilits/Contract';

export const TransactionContext=React.createContext();


const {ethereum} =window;


const GetEthereumContract=()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer=provider.getSigner();
    const TransactionContract=new ethers.Contract(ContractAddress,ContractABI,signer);
     return TransactionContract;
}

export const TransactionProvider=({children})=>{

    const [CurrentAcccount,setCurrentAccount]=React.useState('');
    const [AmountIn,setAmountIn]=React.useState(localStorage.getItem('AmountIn'));
    const [formData,setFormData]=React.useState({addressTo:'', Name:'', Amount:'', EmployeeID:''});
    const [Employees,setEmployees]=React.useState([]);

const GetEthereumContract1=async()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer=provider.getSigner();
    const TransactionContract=new ethers.Contract(ContractAddress,ContractABI,signer);

   const trxHash=await TransactionContract.AddMoney({value:ethers.utils.parseEther('0.0001')._hex});
      await trxHash.wait();
  
      await TransactionContract.ComapanyMoneyAmount().then(result=>setAmountIn(result.toNumber()));

     return TransactionContract;
}



const GetEthereumContract2=async()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer=provider.getSigner();
    const TransactionContract=new ethers.Contract(ContractAddress,ContractABI,signer);

    await TransactionContract.ComapanyMoneyAmount().then(result=>setAmountIn(result.toNumber()));
  
     return TransactionContract;
}



const getAllEmployeesDetails=async()=>{
    try {
        const TransactionContract=GetEthereumContract();
        const AllEmployees=await TransactionContract.CompanyEmployees();
      //  console.log(AllEmployees);
       
        const TransObj=AllEmployees.map((Employee)=>({
            addressTo:Employee.EmployeeAddress,
            Name:Employee.Name,
            Amount:parseInt(Employee.Amount)/(10**18),
             Paid:Employee.Ispaid,
             EmployID:Employee.APID,
             timeStamp:new Date(Employee.timestamp.toNumber()*1000).toLocaleString(),
        }))
   
      //  console.log(TransObj);

  setEmployees(TransObj);

    } catch (error) {
        console.log(error);
    }
    }
    


    const CheckIfWalletIsConnected=async ()=>{
        if(!ethereum) return alert('please Install Metamask');

    const accounts=await ethereum.request({method:'eth_accounts'});
   if(accounts.length){
    setCurrentAccount(accounts[0]);
    getAllEmployeesDetails()
   }
    }

   
    const ConnectToWallet=async()=>{
        try {
            if(!ethereum) return alert('please Install Metamask');

            const accounts=await ethereum.request({method:'eth_requestAccounts'});

            setCurrentAccount(accounts[0]);
            
        } catch (error) {
            console.log(error)
        }
    }


    const AddMoneyToContract=async()=>{
            GetEthereumContract1();
    }

    const ShowMoney=async()=>{
        GetEthereumContract2();
    }



    const handleChange=async(e,Name)=>{
        setFormData((prevstate)=>({...prevstate,[Name]:e.target.value}));
    }


  const AddEmployee=async()=>{
try {

    const {addressTo,Name,Amount,EmployeeID}=formData;
 const ParasedAmount=ethers.utils.parseEther(Amount);

      const TransactionContract=GetEthereumContract();

      const trxHash=await TransactionContract.AddDetails(addressTo, Name, ParasedAmount, EmployeeID);

    console.log(trxHash.hash);
   await trxHash.wait();
   console.log("dfhfdhfdf");
  console.log(trxHash.hash);
  window.location.reload();
} catch (error) {
    console.log(error);
}

  }


  const PayNow=async()=>{

 try {
    const TransactionContract=GetEthereumContract();
    const trxHash2=await TransactionContract.PaySalary();
    console.log(trxHash2.hash);
    await trxHash2.wait();
    console.log("dfhfdhfdf");
    console.log(trxHash2.hash);

    window.location.reload();
 } catch (error) {
    console.log(error);
 }

  }


const ChangeTheState=async()=>{
    try {
        const TransactionContract=GetEthereumContract();
        const trxHash=await TransactionContract.ChangeTheSalaryState();

        console.log(trxHash.hash);

        await trxHash.wait();

        console.log("dfhfdhsgdhfghfdgfdf");

        console.log(trxHash.hash);
    
        window.location.reload();
     } catch (error) {
        console.log(error);
     }
    
}




useEffect(()=>{
  CheckIfWalletIsConnected();
},[])

    return (
        <TransactionContext.Provider value={{connectWallet:ConnectToWallet,currentAccount:CurrentAcccount,addMoney:AddMoneyToContract,amountIn:AmountIn,showMoney:ShowMoney,handleChange,formData,AddEmployee,Employees,PayNow,ChangeTheState}}>
            {children}
        </TransactionContext.Provider>
    )
}