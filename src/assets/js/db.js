const leveljs = require('level-js');
const linvodb = require('linvodb3');
const Promise = require("bluebird");
var fs = window.require('fs');
var readline = window.require('readline');
const electron = window.require('electron');
const {app} = electron.remote;

linvodb.defaults.store = {
  db: leveljs
};
linvodb.path = app.getPath('userData');

let db = new linvodb('song', {
  registrationNumber: Number,
  name: String,
  fatherName: String,
  motherName: String,
  gender: String,
  birthPlace: String,
  fatherOccuation: String,
  caste: String,
  subCaste: String,
  dateOfBirth: String,
  dateOfJoining: String,
  fromClass: Number,
  toClass: Number,
  TCIssueDate: String,
  AadharNumber: Number,
  Remarks: String
});

db.ensureIndex({
  fieldName: 'registrationNumber',
  unique: true
});

db = Promise.promisifyAll(db);

const dbHandler = {
  createDB: function(callback) {
    db.remove({ }, { multi: true }, function (err, numRemoved) {
      // numRemoved = 3, all planets from the solar system were removed
    });

    let lineReader = readline.createInterface({
      input: fs.createReadStream('src/assets/ADMISSION REGISTER.csv')
    });

    lineReader.on('line', function (line) {
      // console.log('Line from file:', line);
      callback(line);
      let row = line.split(",");
      // console.log(row.length);
      db.insert({ 
        registrationNumber: parseInt(row[0]),
        name: row[1],
        fatherName: row[2],
        motherName: row[3],
        gender: row[4],
        birthPlace: row[5],
        fatherOccuation: row[6],
        caste: row[7],
        subCaste: row[8],
        dateOfBirth: row[9],
        dateOfJoining: row[10],
        fromClass: (row[11] ? parseInt(row[11]): row[11]),
        toClass: (row[12] ? parseInt(row[12]): row[12]),
        TCIssueDate: row[13],
        AadharNumber: (row[14] ? parseInt(row[14]): row[14]),
        Remarks: row[15]
       }, function (err, newDoc) {
        console.log(newDoc._id);
      });
    });

    lineReader.on('close',function() {

    });
  },
  searchByRegID: async function(value) {
    return await db.findOneAsync({ registrationNumber: value });
  },
  searchByName: async function(value) {
    return await db.findAsync({ name: { $regex: new RegExp(value.toString(), "i") } });
    // .then(docs => {
    //   // console.log(docs);
    //   // store.commit({
    //   //   type: mutationTypes.ADD_SONGS,
    //   //   songs: docs
    //   // });
    //   return docs;
    // })
    // .catch(err => console.log(err));
  }
}

export default dbHandler;