import sinon from 'sinon';

import { expect } from 'chai';
import { Model } from 'mongoose';
import { bodyRequisition, expectedReturn } from '../../../src/AllMocks/mockMotorcycle';

import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('testando as funções de serviceMotorcycle', function () {
//   afterEach(async function () {
//     sinon.restore();
//   });

  it('verifica se consegue adicionar uma motocicleta', async function () {
    sinon.stub(Model, 'create').resolves(expectedReturn);
    const service = new MotorcycleService();
    const result = await service.create(bodyRequisition);
    expect(result).to.be.deep.equal(expectedReturn);
  });
});
