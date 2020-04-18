const { resolve } = require('path');
const leveljs = require('level-js');
const Linvodb = require('linvodb3');
const Promise = require('bluebird');
const fs = window.require('fs');
const readline = window.require('readline');
const electron = window.require('electron');
const { app } = electron.remote;

Linvodb.defaults.store = {
  db: leveljs,
};
Linvodb.path = app.getPath('userData');

let db = new Linvodb('song', {
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
  Remarks: String,
});

db.ensureIndex({
  fieldName: 'registrationNumber',
  unique: true,
});

db = Promise.promisifyAll(db);

const dbHandler = {
  createDB(callback) {
    db.remove({}, { multi: true }, function (err, numRemoved) {
      if (err) console.log(err);
    });

    // console.log(path.resolve(__dirname));

    const lineReader = readline.createInterface({
      input: fs.createReadStream(
        resolve('/Users/rentomojo/git/student-portal-revamp/src/renderer/assets/ADMISSION REGISTER.csv')
      ),
    });

    lineReader.on('line', function (line) {
      // console.log('Line from file:', line);
      if (typeof callback === 'function') callback(line);
      const row = line.split(',');
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
        fromClass: (row[11] ? parseInt(row[11]) : row[11]),
        toClass: (row[12] ? parseInt(row[12]) : row[12]),
        TCIssueDate: row[13],
        AadharNumber: (row[14] ? parseInt(row[14]) : row[14]),
        Remarks: row[15],
      }, function (err, newDoc) {
        console.log(err);
        console.log(newDoc._id);
      });
    });

    lineReader.on('close', async () => {
      console.log(await db.findAsync({}));
    });
  },
  searchByRegID(value) {
    return db.findOneAsync({ registrationNumber: value });
  },
  searchByName(value) {
    return db.findAsync({ name: { $regex: new RegExp(value.toString(), 'i') } });
    // .then(docs => {
    //   // console.log(docs);
    //   // store.commit({
    //   //   type: mutationTypes.ADD_SONGS,
    //   //   songs: docs
    //   // });
    //   return docs;
    // })
    // .catch(err => console.log(err));
  },
};
// window.dbHandler = dbHandler;
export default dbHandler;
