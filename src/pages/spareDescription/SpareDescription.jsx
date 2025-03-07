import React from 'react'

const SpareDescription = () => {
  return (
    <div className='border flex flex-col md:flex-row text-left mt-12 w-full p-6'>
      <div className="max-w-4xl w-full">
        <p className="text-lg text-gray-600 mb-4">
          Experience superior engine protection with Bosch Premium FILTECH. Designed with advanced filtration technology, this oil filter captures more contaminants, ensuring a cleaner and longer-lasting engine.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Specification:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-gray-600">Honda: Accord (2008-2022), Civic (2006-2021), CR-V (2007-2022), Pilot (2009-2021)</li>
          <li className="text-gray-600">Toyota: Camry (2010-2022), Corolla (2009-2022), RAV4 (2006-2022), Tacoma (2005-2021)</li>
          <li className="text-gray-600">Anti-Drainback Valve – Prevents dry starts and ensures consistent lubrication</li>
          <li className="text-gray-600">High Lubricity Gasket – Provides a tight seal without sticking</li>
          <li className="text-gray-600">Optimized Flow Design – Maintains proper oil flow for engine efficiency</li>
        </ul>
      </div>
    </div>
  )
}

export default SpareDescription
