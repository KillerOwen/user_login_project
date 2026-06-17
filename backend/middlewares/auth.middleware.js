import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(!token){
        return res.status(401).json({success: false, error: "Token not found"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    }
    catch(err){
        res.status(401).json({success: false, error: "Invalid Token"});
    }
}

export default requireAuth;