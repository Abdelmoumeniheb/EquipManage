const { createConnection } = require('typeorm');

async function connectToDatabase() {
  try {
    const connection = await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306, 
      username: 'root',
      password: '',
      database: 'new_db_vivo',
      synchronize: true, 
      logging: true, 
      entities: ['/src/entity/**/*.js'],
    });

    console.log('Connected to the database');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = connectToDatabase;
