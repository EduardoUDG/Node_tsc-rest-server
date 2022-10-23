import { Request, Response } from 'express';


const getUsers = ( req:Request, res:Response ) => {
    return res.json({
        msg: 'Hello from user controllers'
    });
}


export { getUsers };