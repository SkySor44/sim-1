module.exports = {
    getInventory: (req, res, next) => {
        const db = req.app.get('db');
        db.getMyInventory().then(products => {
            res.status(200).send(products)
        }).catch(() => res.status(500).send())
    },

    createProduct: (req, res, next) => {
        const db = req.app.get('db');
        const {name, price, imgurl} = req.body;
        db.createMyProduct(name, price, imgurl).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },

    deleteProduct: (req, res, next) =>{
        const db = req.app.get('db');
        const {id} = req.params;
        db.deleteMyProduct(id).then( () => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },

    updateProduct: (req,res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {name, price, imgurl} = req.body;
        db.updateMyProduct(name, price, imgurl, id).then( () => {
            res.status(200).send()
        }).catch( () => res.status(500).send())
    }
}