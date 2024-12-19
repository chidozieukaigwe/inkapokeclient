import React from 'react'

export default function OrdersPage() {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th  className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base odd:bg-red-50'>
            <td  className='hidden md:block py-6 px-1'>1234567890</td>
            <td className='py-6 px-1'>2024-01-01</td>
            <td className='py-6 px-1'>£50.00</td>
            <td  className='hidden md:block py-6 px-1'>Picarona(1), Pachamama(1)</td>
            <td className='py-6 px-1'>Preparing</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td  className='hidden md:block py-6 px-1'>1234567890</td>
            <td className='py-6 px-1'>2024-01-01</td>
            <td className='py-6 px-1'>£50.00</td>
            <td  className='hidden md:block py-6 px-1'>Picarona(1), Pachamama(1)</td>
            <td className='py-6 px-1'>Ready For Pickup</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td  className='hidden md:block py-6 px-1'>1234567890</td>
            <td className='py-6 px-1'>2024-01-01</td>
            <td className='py-6 px-1'>£50.00</td>
            <td  className='hidden md:block py-6 px-1'>Picarona(1), Pachamama(1)</td>
            <td className='py-6 px-1'>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
