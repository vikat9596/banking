import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'
import RightSidebar from "@/components/RightSidebar"

const Home = () => {
  const loggedIn = {firstName: 'Jenny', lastName:'Rane', email:'jennyrane@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type ="greeting"
            title= "Welcome"
            user={loggedIn.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.65}/>
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn}
                transactions={[]}
                banks={[{currentBalance:745.60},{currentBalance:9847.50}]}/>
    </section>
  )
}

export default Home