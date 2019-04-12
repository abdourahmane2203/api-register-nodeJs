import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as compression from 'compression';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors    from 'cors';

// Import routers
import PostRouter from './routers/Post.router';

class Server{
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.route();
    }

    /**
     * config
     */
    public config() {

        // set up mongoose
        const MONGO_URI = 'mongodb://localhost/APIDB';
        mongoose.connect(MONGO_URI || process.env.MONGO_URI);

        // config
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
        this.app.use(helmet());
        this.app.use(logger('dev'));
        this.app.use(cors());
        this.app.use(compression())
     }

    /**
     * route
     */
    public route(): void{
        let router: express.Router;
        router = express.Router();

        // Routes 
        router.use('/api/v1/posts', PostRouter);
    }

}

export default new Server().app; 