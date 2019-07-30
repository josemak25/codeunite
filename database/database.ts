import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const connection = (url: string, config = {}) => {
  return mongoose.connect(url, { useNewUrlParser: true, ...config });
};

export default connection;
