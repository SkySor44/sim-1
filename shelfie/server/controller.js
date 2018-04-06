module.exports = {
    getInventory: (req, res, next) => {
        const db = req.app.get('db');
        db.getMyInventory().then(products => {
            console.log(products)
            res.status(200).send(products)
        }).catch(() => res.status(500).send())
    }
}