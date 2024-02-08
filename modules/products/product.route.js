const router = require("express").Router();
const productModel = require("./product.controller");
const { validateProductData } = require("./product.validate");

router.get("/", async (req, res, next) => {
  try {
    const result = await productModel.getAllProduct();
    res.json({ product: result });
  } catch (error) {
    next(error);
  }
});

router.post("/", validateProductData, async (req, res, next) => {
  try {
    const data = req.body;
    const result = await productModel.createProduct(data);
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      message: `You are inside put method and the data to be updated of prodct are of id : ${id}`,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      message: `You are inside path method and the data to be updated is of product of id ${id}`,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productModel.deleteProduct(id);
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
