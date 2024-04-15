import { server } from './bin/Server';

server.listen(process.env.PORT || 3333, () => {
    console.log(`Server is running on ${process.env.PORT || 3333}`);
});