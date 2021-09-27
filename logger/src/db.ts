import { Db, MongoClient } from 'mongodb';

export default class MongoDb {

  private client: MongoClient;
  private _db: Db | null = null;

  constructor(db: string) {
    this.client = new MongoClient('mongodb://mongo');

    this.client.connect()
      .then(() => {
        console.log('Connected to MongoDB');
        this._db = this.client.db(db);
      });
  }

  get db(): Db | null {
    return this._db;
  }

}
