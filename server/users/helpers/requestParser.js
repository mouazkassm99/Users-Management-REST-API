export default function parseHttpRequest(req = {}){
    return Object.freeze({
        path:req.path,
        method:req.method,
        params:req.params,
        query:req.query,
        body:req.body
    })
}