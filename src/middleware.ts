import { NextFunction } from "express";

export const getDay = (req: any, res: any, next: NextFunction) => {
    try {
        const day = new Date().getDay();
        req.headers.set('day', `${day}`);
        console.log(day);
        next();
    }catch(err){
        console.log(err);
        return res.status(500).json({err: err});
    }
}