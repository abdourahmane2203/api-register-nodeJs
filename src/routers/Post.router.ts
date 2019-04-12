import { Router, Request, Response } from "express";
import Post from '../models/Post.model';

class PostRouter{

     router: Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    /**
     * getPosts
     */
    public getPosts(req: Request, res: Response) {
        Post.find({})
            .then((data) =>{
                const status = res.statusCode;
                res.json({status, data});
            })
            .catch((err) =>{
                const status = res.statusCode;
                res.json({status, err});
            })
    }

    /**
     * getPost
     */
    public getPost(req: Request, res: Response) {
        
    }

    /**
     * createPost
     */
    public createPost(req: Request, res: Response) {
        
    }

    /**
     * updatePost
     */
    public updatePost(req: Request, res: Response) {
        
    }

    /**
     * deletePost
     */
    public deletePost() {
        
    }
    
    /**
     * routes
     */
    public routes() {
        this.router.get('/', this.getPosts);
        this.router.get('/:slug', this.getPost);
    }
}

//export
const postRoutes = new PostRouter(); 
postRoutes.routes();
export default postRoutes.routes;