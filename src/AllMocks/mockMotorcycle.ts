import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';

const bodyRequisition: IMotorcycle = {
    
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
      
};

const expectedReturn: Motorcycle = new Motorcycle( 
  {
    // id: '6348513f34c397abcad040b2',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
);

export { bodyRequisition, expectedReturn };