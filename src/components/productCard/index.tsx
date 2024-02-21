import React from 'react';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';

const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h in 4 seconds', icon: IconGauge },
  { label: 'Automatic gearbox', icon: IconManualGearbox },
  { label: 'Electric', icon: IconGasStation },
];

export function ProductCard() {
  const features = mockdata.map((feature) => (
    <div key={feature.label} className="flex items-center space-x-2">
      <feature.icon size="1.05rem" stroke={1.5} className="text-gray-500" />
      <p className="text-xs">{feature.label}</p>
    </div>
  ));

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <div className="h-48 relative">
        <img src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=826&t=st=1708496431~exp=1708497031~hmac=a02938916c21350e2e79626671bfe525cd569d5f2df0b70ddcb5e78d75a9c8bc" alt="Tesla Model S" className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-medium">Tesla Model S</h3>
            <p className="text-xs text-gray-500">Free recharge at any station</p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">25% off</span>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Basic configuration</p>
          <div className="flex flex-wrap gap-2">
            {features}
          </div>
        </div>

        <div className="flex gap-8">
          <div>
            <p className="text-xl font-bold">$168.00</p>
            <p className="text-sm text-gray-500 font-medium mt-1">per day</p>
          </div>

          <button className="flex-1 py-2 px-4 rounded-xl bg-indigo-600 shadow-sm text-white font-semibold  hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Rent now</button>
        </div>
      </div>
    </div>
  );
}
