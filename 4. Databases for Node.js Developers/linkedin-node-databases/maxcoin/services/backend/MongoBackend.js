/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
const { MongoClient } = require('mongodb');
const CoinAPI = require('../CoinAPI');
require('dotenv').config();

class MongoBackend {

  constructor() {
    this.coinAPI = new CoinAPI();
    this.mongoUrl = process.env.DB_CNN;
    this.client = null;
    this.collection = null;
  }

  async connect() {
    const mongoClient = new MongoClient(this.mongoUrl, {
      useUnifiedTopology: true,
      useNewUrlParser : true,
    });
    this.client = await mongoClient.connect();
    this.collection = this.client.db('maxcoin').collection('values');
    return this.client;
  }

  async disconnect() {
    if (this.client) {
      return this.client.close();
    }
    return false;
  }

  async insert() {}

  async getMax() {}

  async max() {
    console.info('Connection to MongoDB');
    console.time('mongodb-connect');
    try {
      await this.connect();
      console.info('Connected to MongoDB');
    } catch (error) {
      console.info('Fail to connected to MongoDB');
      console.log(error);
    }
    console.timeEnd('mongodb-connect');

    console.info('Disconnecting from MongoDB');
    console.time('mongodb-disconnect');
    await this.disconnect();
    console.timeEnd('mongodb-disconnect');

  }
}

module.exports = MongoBackend;