import {
  Model, models, Schema, model,
} from 'mongoose';
  
abstract class AbstractODM<T> {
  public mongooseModel: Model<T>;
  public modelName: string;
  public schema: Schema;
  
  constructor(schema: Schema, modelName: string) {
    this.modelName = modelName;
    this.schema = schema;
    this.mongooseModel = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  public async create(data: T): Promise<T> {
    return this.mongooseModel.create({ ...data });
  }
}

export default AbstractODM;