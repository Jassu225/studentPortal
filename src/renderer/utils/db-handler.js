import isNaN from '~/utils/is-nan';
// import source from '~/assets/ADMISSION REGISTER.csv';
const { resolve: pathResolve } = require('path');
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

let db = new Linvodb('record', {
  admissionNumber: Number,
  name: String,
  fatherName: String,
  motherName: String,
  gender: String,
  birthPlace: String,
  fatherOccuation: String,
  caste: String,
  subCaste: String,
  dateOfBirth: Date,
  dateOfJoining: Date,
  fromClass: Number,
  toClass: Number,
  tcIssueDate: Date,
  aadharNumber: Number,
  remarks: String,
});

db.ensureIndex({
  fieldName: 'admissionNumber',
  unique: true,
});

db = Promise.promisifyAll(db);

const formatAadharNumber = aadharNumber => {
  const formattedAadharNumber = parseInt(aadharNumber && aadharNumber.toString().trim().replace(/ /g, ''));
  if (isNaN(formattedAadharNumber)) {
    return aadharNumber?.toString().trim();
  }
  return formattedAadharNumber;
};

const formatClass = classNumber => {
  const formattedClass = parseInt(classNumber);
  if (isNaN(formattedClass)) {
    return classNumber?.toString().trim();
  }
  return formattedClass;
};

// todo: add date validator
const formatDate = date => {
  return date?.toString().trim().replace(/ /g, '').split(/[/|-]/).reverse().join('/');
};

// console.log(source);

const dbHandler = {
  createDB(callback) {
    db.remove({}, { multi: true }, function (err, numRemoved) {
      if (err) console.log(err);
      else console.log(numRemoved);
    });

    // console.log(path.resolve(__dirname));

    const lineReader = readline.createInterface({
      input: fs.createReadStream(
        pathResolve('/Users/rentomojo/git/student-portal-revamp/src/renderer/assets/ADMISSION REGISTER.csv')
      ),
    });

    lineReader.on('line', function (line) {
      // console.log('Line from file:', line);
      if (typeof callback === 'function') callback(line);
      const row = line.split(',');
      // console.log(row.length);
      db.insert({
        admissionNumber: parseInt(row[0]),
        name: row[1],
        fatherName: row[2],
        motherName: row[3],
        gender: row[4],
        birthPlace: row[5],
        fatherOccuation: row[6],
        caste: row[7],
        subCaste: row[8],
        dateOfBirth: formatDate(row[9]),
        dateOfJoining: formatDate(row[10]),
        fromClass: formatClass(row[11]),
        toClass: formatClass(row[12]),
        tcIssueDate: formatDate(row[13]),
        aadharNumber: formatAadharNumber(row[14]),
        remarks: row[15],
      }, function (err, newDoc) {
        if (err) {
          console.error(err);
        } else {
          console.log(newDoc);
        }
      });
    });

    lineReader.on('close', async () => {
      console.log(await db.findAsync({}));
    });
  },
  searchByRegID(value) {
    return db.findOneAsync({ admissionNumber: value });
  },
  searchByAadharNumber(aadharNumber) {
    return db.findOneAsync({ aadharNumber: { $regex: new RegExp(aadharNumber.toString()) } });
  },
  searchByName(value) {
    return db.findAsync({ name: { $regex: new RegExp(value.toString(), 'i') } });
  },
};
window.dbHandler = dbHandler;
window.db = db;
export default dbHandler;
