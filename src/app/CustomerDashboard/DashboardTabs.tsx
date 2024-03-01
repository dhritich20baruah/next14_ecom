"use client"
import React from 'react'
import Link from 'next/link'

const DashboardTabs = () => {

  const logOut = () => {
    localStorage.clear()
    window.location.replace('/Login')
    alert("You have successfully logged out.")
  }

  return (
    <div>
    <ul className="space-y-5">
      <Link href="/CustomerDashboard/Profile">
      <li className="p-1 m-1 border-2 border-gray-700 text-gray-700 w-[100%] text-center hover:bg-gray-700 hover:text-white hover:cursor-pointer">My Profile</li>
      </Link>
      <Link href="/CustomerDashboard/Cart">
      <li className="p-1 m-1 border-2 border-gray-700 text-gray-700 w-[100%] text-center hover:bg-gray-700 hover:text-white hover:cursor-pointer">Cart</li>
      </Link>
      <Link href="/CustomerDashboard/Orders">
      <li className="p-1 m-1 border-2 border-gray-700 text-gray-700 w-[100%] text-center hover:bg-gray-700 hover:text-white hover:cursor-pointer">Orders</li>
      </Link>
      <Link href="">
      <li className="p-1 m-1 border-2 border-gray-700 text-gray-700 w-[100%] text-center hover:bg-gray-700 hover:text-white hover:cursor-pointer" onClick={logOut}>Logout</li>
      </Link>
    </ul>
</div>
  )
}

export default DashboardTabs