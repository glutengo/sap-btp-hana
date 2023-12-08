module.exports = class src {
    hello(req) { return `Hello, ${req.data.to}!` }
}