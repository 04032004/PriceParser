import mongoose, { mongo } from 'mongoose';

let isConnected = false; //VARIABLE TO TRACK THE CONNECTION STATUS

export const connectToDatabase = async () => {
      mongoose.set('strictQuery', true);

      if(!process.env.MONGODB_URI) return console.log('MONGODB_URI is not defined');

      if(isConnected) return console.log('=> using existing database connection')

        try {
                await mongoose.connect(process.env.MONGODB_URI);

                isConnected= true;

                console.log('mongoDB connnected')
        } catch (error) {
            console.log(error);
        }
}

