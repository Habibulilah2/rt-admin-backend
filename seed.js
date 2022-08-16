var seeder = require('mongoose-seed');
var mongoose = require('mongoose');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb+srv://admin:rahasia@cluster0.oxzymt0.mongodb.net/db_rt?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function () {

  // Load Mongoose models
  seeder.loadModels([
    './models/Category',
    './models/Bank',
    './models/Item',
    './models/Member',
    './models/Image',
    './models/Dues',
    './models/Users'
  ]);

  // Clear specified collections
  seeder.clearModels(['Category', 'Bank', 'Item', 'Member', 'Image', 'Dues', 'Users'], function () {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });

  });
});

var data = [
  // start category
  {
    'model': 'Category',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901111'),
        name: 'Warga',
        memberId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903333') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903334') }
        ]
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901112'),
        name: 'Tagihan'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901113'),
        name: 'Polling'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901114'),
        name: 'Pengumuman'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901115'),
        name: 'Cashflow'
      }
    ]
  },
  // end category
  // start item
  {
    'model': 'Item',
    'documents': [
      // houses
      // done
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        title: 'Lomba 17 Agustusan',
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1') }
        ]
      },
      // done
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        title: 'Lomba 17 Agustusan',
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2') }
        ]
      },
      // done
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
        title: 'Lomba 17 Agustusan',
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3') }
        ]
      },
    ]
  },
  // end item
  // start image
  {
    'model': 'Image',
    'documents': [
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1'),
        imageUrl: 'images/item-1.png'
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2'),
        imageUrl: 'images/item-2.png'
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3'),
        imageUrl: 'images/item-3.png'
      },
    ]
  },
  // end image

  // start dues
  {
    'model': 'Dues',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cee1'),
        duesStartDate: '2020-12-11',
        invoice: 1231231,
        itemId: {
          _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
          title: 'Village Angga',
        },
        total: 12,
        memberId: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        bankId: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        payments: {
          proofPayment: 'images/bukti.jpg',
          bankFrom: 'BCA',
          status: 'Proses',
          accountHolder: 'ang'
        }
      }
    ]
  },
  // end dues

  // member
  {
    'model': 'Member',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        firstName: 'Elfin',
        lastName: 'Sanjaya',
        email: 'elfinsanjaya12@gmail.com',
        phoneNumber: '082377954008',
        place: 'Bekasi',
        dateBirth: '2000-01-26',
        address: 'Jl Sudirman No 01 RT004/011',
        gender: 'Laki-Laki',
        religion: 'Islam'  
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903334'),
        firstName: 'Yein',
        lastName: 'Narayana',
        email: 'elfinsanjaya1207@gmail.com',
        phoneNumber: '082377954008',
        place: 'Bekasi',
        dateBirth: '2000-01-26',
        address: 'Jl Sudirman No 01 RT004/011',
        gender: 'Laki-Laki',
        religion: 'Islam'
      }
    ]
  },
  {
    'model': 'Bank',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903322'),
        nameBank: 'Mandiri',
        nomorRekening: '089898',
        name: 'elfin',
        imageUrl: 'images/9999999999.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        nameBank: 'BCA',
        nomorRekening: '878678',
        name: 'elfin',
        imageUrl: 'images/9999999999.png'
      }
    ]
  },
  {
    'model': 'Users',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
        username: 'admin',
        password: 'rahasia',
      },
    ]
  }
];