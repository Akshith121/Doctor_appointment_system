import { NextFunction } from "express";

export const getDay = (req: any, res: any, next: NextFunction) => {
    try {
        const day = new Date().getDay();
        res.locals.day = day;
        console.log(day);
        next();
    }catch(err){
        console.log(err);
        return res.status(500).json({err: err});
    }
}

export const checkIfSunday = (req: any, res: any, next: NextFunction) => {
    const day = req.locals.day;
    if(day !== 0){
        next();
    }
    else{
        return res.status(200).json({mssg: "Apologies for any inconvenience caused. Please note that there will be no doctor available on Sundays."});
    }
}