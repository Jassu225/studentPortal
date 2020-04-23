import isNaN from '~/utils/is-nan';
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
  admissionNumber: Number,
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
  tcIssueDate: String,
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

const formatDate = date => {
  return date?.toString().trim().replace(/ /g, '').replace(/-/g, '/');
};

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
    return db.findOneAsync({ aadharNumber: { $regex: new RegExp(aadharNumber.toString(), 'i') } });
  },
  searchByName(value) {
    return db.findAsync({ name: { $regex: new RegExp(value.toString(), 'i') } });
  },
};
window.dbHandler = dbHandler;
export default dbHandler;
