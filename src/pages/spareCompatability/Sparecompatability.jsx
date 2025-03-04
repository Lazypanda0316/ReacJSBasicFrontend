import React from 'react'

const Sparecompatability = () => {
  return (
    <div className='border flex text-left mt-12 w-full p-6'>
      <div className="max-w-4xl w-full">
        <p className="text-lg text-gray-600 mb-4">
          Experience superior engine protection with Bosch Premium FILTECH. Designed with advanced filtration technology, this oil filter captures more contaminants, ensuring a cleaner and longer-lasting engine.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Fits the Following Vehicles:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-gray-600">Honda: Accord (2008-2022), Civic (2006-2021), CR-V (2007-2022), Pilot (2009-2021)</li>
          <li className="text-gray-600">Durable Steel Housing – Prevents leaks and enhances durability</li>
          <li className="text-gray-600">Anti-Drainback Valve – Prevents dry starts and ensures consistent lubrication</li>
          <li className="text-gray-600">Nissan: Altima (2008-2022), Rogue (2010-2022), Sentra (2013-2022)</li>
          <li className="text-gray-600">Ford: Escape (2008-2021), Fusion (2010-2020), Focus (2012-2019)</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Cross-reference part numbers:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-gray-600">Bosch: 3323</li>
          <li className="text-gray-600">Fram: PH7317</li>
          <li className="text-gray-600">Mobil 1: M1-110A</li>
          <li className="text-gray-600">K&N: HP-1010</li>
        </ul>
      </div>
    </div>)
}

export default Sparecompatability
