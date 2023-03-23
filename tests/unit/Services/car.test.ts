import sinon from 'sinon';

import { expect } from 'chai';
import { Model } from 'mongoose';
import { bodyRequisition, expectedReturn, carsArray } from '../../../src/AllMocks/mockCars';

import CarService from '../../../src/Services/CarService';

const expecteId = '6348513f34c397abcad040b2';

describe('testando funções de serviceCar', function () {
  afterEach(async function () {
    sinon.restore();
  });
  it('verifica se consegue adicionar um carro', async function () {
    sinon.stub(Model, 'create').resolves(expectedReturn);
    const service = new CarService();
    const result = await service.create(bodyRequisition);
    expect(result).to.be.deep.equal(expectedReturn);
  });

  it('verifica o retorno de todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(carsArray);
    const service = new CarService();
    const result = await service.getAllCars();
    expect(result).to.be.deep.equal(carsArray);
  });

  it('retorno do carro por id', async function () {
    sinon.stub(Model, 'findOne').resolves(expectedReturn);
    const service = new CarService();
    const result = await service.getACar(expecteId);
    expect(result).to.be.deep.equal(expectedReturn);
  });
});