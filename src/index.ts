import { port, server } from './server/Server';

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});