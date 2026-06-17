const errorHandler = (err, req, res, next) => {
    const errArray = [];

    if(err.name === "ValidationError"){
        const objArray = Object.values(err.errors);

        objArray.map(obj => {
            errArray.push({path: obj.path, kind: obj.kind})
        })

        res.status(400).json({success: false, msg: errArray})
    }
    else if(err.code === 11000){
        errArray.push({path: "email", kind: "duplicate key"})

        res.status(400).json({success: false, msg: errArray});
    }
}

export default errorHandler;