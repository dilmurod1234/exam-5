import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className='flex flex-col w-[255px] h-[100vh] bg-[#363740;]'>
        <NavLink style={{textDecoration: "none"}} to={"/clients"}>
          <div className='py-[18px] px-8 border-l-[3px] border-transparent hover:bg-[#9FA2B4] hover:bg-opacity-10 hover:border-[#DDE2FF]'>
            <p className='text-base text-[#DDE2FF]'>Clients</p>
          </div>
        </NavLink>
        <NavLink style={{textDecoration: "none"}} to={"/suppliers"}>
          <div className='py-[18px] px-8 border-l-[3px] border-transparent hover:bg-[#9FA2B4] hover:bg-opacity-10 hover:border-[#DDE2FF]'>
            <p className='text-base text-[#DDE2FF]'>Suppliers</p>
          </div>
        </NavLink>
      </div>
    )
  }
}