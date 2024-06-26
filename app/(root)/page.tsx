// import React from "react";
import RightSidebar from "@/components/RightSidebar";
import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
const home= ()=>{
    const loggedIn={firstName : "Hardik" ,lastName:"Yadav",email:"hardtaac4@gmail.com"}
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                   <HeaderBox
                    type ="greeting"
                    title="Welcome"
                    user ={loggedIn?.firstName ||"guest"}
                    subtext="Access and manage your account and tarnsactions"
                   />
                   <TotalBalanceBox
                   accounts={[]}
                   totalBanks={1}
                   totalCurrentBalance={1250.35}
                   />
                </header>
                Recent Transanctions
            </div>
            <RightSidebar
            user={loggedIn}
             transactions={[]}
             banks={[{currentBalance:123.50},{
                currentBalance:453.67}
             ]}
             
             />
            
        </section>
    )

}
export default home;

