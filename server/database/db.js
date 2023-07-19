import mongoose  from 'mongoose';

const Connection = async ( password = '19072023') => {
    const URL = `mongodb+srv://DOCS:${password}@cluster0.8k3ze7h.mongodb.net/?retryWrites=true&w=majority`;
    

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;