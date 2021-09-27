import { Db, MongoClient } from 'mongodb';

export default class MongoDb {

  private client: MongoClient;
  private _db: Db | null = null;

  constructor(db: string) {
    const url = process.env['NODE_ENV'] === 'production' ?
      'mongodb://mongo' :
      'mongodb://localhost';

    this.client = new MongoClient(url);

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
