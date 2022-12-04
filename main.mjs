import express from 'express';
import { SERVER, DIRECTORY, ROUTES } from './config.mjs'

// Import Routers
import { indexRouter } from './server/route/index.js'

export const HTTP_SERVER = express();
export default HTTP_SERVER;

HTTP_SERVER.set('views', DIRECTORY.VIEWS);
HTTP_SERVER.set('view engine', SERVER.VIEW_ENGINE);

HTTP_SERVER.use(express.json());
HTTP_SERVER.use(express.urlencoded( {extended: false}));
HTTP_SERVER.use(express.static(DIRECTORY.PUBLIC));

HTTP_SERVER.use(ROUTES.INDEX.path, indexRouter);

HTTP_SERVER.listen(SERVER.PORT, () => {
    console.log(`Server listening on port ${SERVER.PORT}`)
})