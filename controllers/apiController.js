const Item = require("../models/Item");
const Traveler = require("../models/Dues");
const Category = require("../models/Category");
const Bank = require("../models/Bank");
const Member = require("../models/Member");
const Dues = require("../models/Dues");

module.exports = {
  landingPage: async (req, res) => {
    try {

      const category = await Category.find()
        .select("_id name")
        .limit(3)
        .populate({
          path: "itemId",
          select: "_id title imageId",
          perDocumentLimit: 4,
          populate: {
            path: "imageId",
            select: "_id imageUrl",
            perDocumentLimit: 1,
          },
        });

      for (let i = 0; i < category.length; i++) {
        for (let x = 0; x < category[i].itemId.length; x++) {
          const item = await Item.findOne({ _id: category[i].itemId[x]._id });
          item.isPopular = false;
          await item.save();
          if (category[i].itemId[0] === category[i].itemId[x]) {
            item.isPopular = true;
            await item.save();
          }
        }
      }

      res.status(200).json({
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  detailPage: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id })
        .populate({
          path: "imageId",
          select: "_id imageUrl",
          perDocumentLimit: 3,
        })
      const bank = await Bank.find();

      res.status(200).json({ ...item._doc, bank });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  duesPage: async (req, res) => {
    const {
      idItem,
      duesStartDate,
      firstName,
      lastName,
      email,
      phoneNumber,
      accountHolder,
      bankFrom,
    } = req.body;

    if (!req.file) {
      return res.status(404).json({ message: "Image not found" });
    }

    if (
      idItem === undefined ||
      duesStartDate === undefined ||
      firstName === undefined ||
      lastName === undefined ||
      email === undefined ||
      phoneNumber === undefined ||
      accountHolder === undefined ||
      bankFrom === undefined
    ) {
      res.status(404).json({ message: "Lengkapi semua field" });
    }

    const item = await Item.findOne({ _id: idItem });

    if (!item) {
      return res.status(404).json({ message: "Item Not Found" });
    }

    await item.save();

    const invoice = Math.floor(1000000 + Math.random() * 9000000);
    console.log(invoice);

    const member = await Member.create({
      firstName,
      lastName,
      email,
      phoneNumber,
    });

    const newDues = {
      invoice,
      duesStartDate,
      total,
      itemId: {
        _id: item.id,
        title: item.title,
      },

      memberId: member.id,
      payments: {
        proofPayment: `images/${req.file.filename}`,
        bankFrom: bankFrom,
        accountHolder: accountHolder,
      },
    };

    const dues = await Dues.create(newDues);

    res.status(201).json({ message: "Success Dues", dues });
  },
};
