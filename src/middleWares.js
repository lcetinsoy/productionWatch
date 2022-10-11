module.exports.logger = function loggerMiddleWare(req, res, next){
    console.log("rawBody", req.rawBody)
    console.log("a new request was done")
    console.log("req.body", req.body)
    next()
}
