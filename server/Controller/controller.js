module.exports = {
  getInventory: (req, res, next) => {
    req.app
      .get('db')
      .get_products()
      .then(products => {
        res.status(200).json(products);
      })
      .catch(err => console.log(`Error Message`, err));
  },
  getOne: (req, res, next) => {
    const { id } = req.params;
    req.app
      .get('db')
      .get_products([id])
      .then(products => {
        res.status(200).json(products[0]);
      })
      .catch(err => console.log(`Error Message`, err));
  },
  addProduct: (req, res, next) => {
    const { name, price, image_url } = req.body;
    const db = req.app.get('db');
    db.add_product([name, price, image_url])
      .then(products => {
        res.status(200).json(products);
      })
      .catch(err => console.log(`Error Message`, err));
  },
  deleteProduct: (req, res, next) => {
    const { id } = req.params;
    req.app
      .get('db')
      .deleteProduct({ id: id })
      .then(res => {
        res.status(200).json(res);
      })
      .catch(err => console.log(`Error Message`, err));
  },
  editProduct: (req, res, next) => {
    let { id } = req.query;
    const { name, price, image_url } = req.body;
    if (!id) {
      res.status(500).json({ message: `Add a query string` });
      return;
    }
    if (!name || !price || !image_url) {
      res.status(500).json({ message: `Add a query string` });
      return;
    }
    req.app
      .get('db')
      .editProduct([name, price, image_url, id])
      .then(res => {
        res.status(200).json(res);
      })
      .catch(err => console.log(`Error Message!`, err));
  }
};
