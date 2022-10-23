import dotenv from 'dotenv';
import Server from './v1/models/Server.model';

dotenv.config();

const server = new Server();
server.listen();

