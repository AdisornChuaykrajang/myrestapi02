const Product = require("./../models/product");

//เพิ่ม
const insertProductCtrl = async (req, res) => {
  const product = new Product({
    Name: req.body.Name,
    Price: req.body.Price,
    Quantity: req.body.Quantity,
    Status: req.body.Status,
  });

  try {
    const result = await Product.create(product);
    res.json(result);
  } catch (error) {
    res.json({
      message:
        "Error : ไม่สามารถบันทึกข้อมูลได้ กรุณาตรวจสอบหรือลองใหม่อีกครั้ง....",
    });
  }
};
//แก้ไข
const updateProductCtrl = async (req, res) => {
  const product = new Product({
    _id: req.body._id,
    Name: req.body.Name,
    Price: req.body.Price,
    Quantity: req.body.Quantity,
    Status: req.body.Status,
  });

  try {
    const result = await Product.updateOne(
      { _id: product._id },
      {
        $set: {
            Name: product.Name,
            Price: product.Price,
            Quantity: product.Quantity,
            Status: product.Status,
        },
      }
    );
    res.json(result);
  } catch (error) {
    res.json({
      message:
        "Error : ไม่สามารถแก้ไขข้อมูลได้ กรุณาตรวจสอบหรือลองใหม่อีกครั้ง....",
    });
  }
};
//ลบ
const deleteProductCtrl = async (req, res) => {
    const product = new Product({
        _id: req.body._id
      });
    
      try {
        const result = await Product.deleteOne(
          { _id: product._id }
        );
        res.json(result);
      } catch (error) {
        res.json({
          message:
            "Error : ไม่สามารถลบข้อมูลได้ กรุณาตรวจสอบหรือลองใหม่อีกครั้ง....",
        });
      }
};
//ดึงข้อมูลทั้งหมด
const getAllProductCtrl = async (req, res) => {
  try {
    const result = await Product.find();
    res.json(result);
  } catch (error) {
    res.json({
      message:
        "Error : ไม่สามารถดึงข้อมูลได้ กรุณาตรวจสอบหรือลองใหม่อีกครั้ง....",
    });
  }
};

module.exports = {
  insertProductCtrl,
  updateProductCtrl,
  deleteProductCtrl,
  getAllProductCtrl,
};
