const Customer = require("./../models/customer");

//เพิ่ม
const insertCustomerCtrl = async (req, res) => {
  const customer = new Customer({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    gender: req.body.gender,
    Status: req.body.Status,
  });

  try {
    const result = await Customer.create(customer);
    res.json(result);
  } catch (error) {
    res.json({
      message:
        "Error : ไม่สามารถบันทึกข้อมูลได้ กรุณาตรวจสอบหรือลองใหม่อีกครั้ง....",
    });
  }
};
//แก้ไข
const updateCustomerCtrl = async (req, res) => {
  const customer = new Customer({
    _id: req.body._id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    gender: req.body.gender,
    Status: req.body.Status,
  });

  try {
    const result = await Customer.updateOne(
      { _id: customer._id },
      {
        $set: {
          firstname: customer.firstname,
          lastname: customer.lastname,
          phonenumber: customer.phonenumber,
          email: customer.email,
          gender: customer.gender,
          Status: customer.Status,
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
const deleteCustomerCtrl = async (req, res) => {
  const customer = new Customer({
    _id: req.body._id,
  });

  try {
    const result = await Customer.deleteOne({ _id: customer._id });
    res.json(result);
  } catch (error) {
    res.json({
      message:
        "Error : ไม่สามารถลบข้อมูลได้ กรุณาตรวจสอบหรือลองใหม่อีกครั้ง....",
    });
  }
};
//ดึงข้อมูลทั้งหมด
const getAllCustomerCtrl = async (req, res) => {
  try {
    const result = await Customer.find();
    res.json(result);
  } catch (error) {
    res.json({
      message:
        "Error : ไม่สามารถดึงข้อมูลได้ กรุณาตรวจสอบหรือลองใหม่อีกครั้ง....",
    });
  }
};

module.exports = {
  insertCustomerCtrl,
  updateCustomerCtrl,
  deleteCustomerCtrl,
  getAllCustomerCtrl,
};
