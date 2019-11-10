const mongoose = require('mongoose');
const express = require('express');
const app = express();
const morgan = require('morgan')
const { urlencoded, json } = require('body-parser');
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  body: {
    type: String,
    minlength: 10
  }
})

const Note = mongoose.model('note', noteSchema);

app.use(morgan('dev'))
app.use(urlencoded({extended: true}))
app.use(json())

app.get('/notes', async (req, res) => {
  const notes = await Note.find({})
  .lean()
  // .sort()
  // .skip(10)
  // .limit(10)
  .exec()
  res.status(200).json(notes)
})

app.post('/note', async (req, res) => {
  const noteTobeCreated = req.body
  const note = await Note.crete(noteTobeCreated)
  res.status(201).json(note.toJSON())
})

// Connecting to the database.
const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/whatever')
}

connect()
  .then(async connection => {
    app.listen(5000)

  })
  .catch(e => console.error(e))

// Creating a collection
// const student = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   faveFoods: [{ type: String }],
//   info: {
//     school: {
//       type: String
//     },
//     shoeSize: {
//       type: Number
//     }
//   },
//   school: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'school'
//   }

// }, { timestamps: true })

// const school = new mongoose.Schema({
//   district: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'district'
//   },
//   name: {
//     type: String
//   },
//   openSince: Number,
//   students: Number,
//   isGreat: Boolean,
//   staff: [{ type: String }]
// })

// Compound index - an index with 2 fields.
// school.index({
//   district: 1,
//   name: 1
// }, { unique: true })

// school.pre('save', function() {
//   console.log('before save')
// })

// school.pre('validate', function() {
//   console.log('before validate')
// })

// school.pre('findOne', function() {
//   console.log('before findOne')
// })

// school.post('save', function() {
//   console.log('after save')
// })

// school.post('save', function(doc, next) {
//   setTimeout(() => {
//     console.log('post save ', doc)
//     next()
//   }, 1000)
// })

// {
//   key: 'value'
// }




// school.virtual('staffCount')
//   .get(function() {
//     return this.staff.length
//   })

// Creating a model
// const School = mongoose.model('school', school)
// const Student = mongoose.model('student', student)

// connect()
//   .then(async connection => {
//     const mySchool = await School.create({
//       name: 'my school',
//       staff: ['v', 'f', 'fsa']
//     })

    // console.log(mySchool.staffCount);



    // const schoolConfig = {
    //   name: 'mlks elementary',
    //   openSince: 2009,
    //   students: 1000,
    //   isGreat: true,
    //   staff: ['a', 'b', 'c']
    // }

    // const school2 = {
    //   name: 'Larrys Middle school',
    //   openSince: 1980,
    //   students: 600,
    //   isGreat: false,
    //   staff: ['v', 'b', 'g']
    // }

    // const schools = await School.create([schoolConfig, school2])
    // const match = await School.findOne({
    //   students: {$gt: 600, $lt: 800},
    //   isGreat: true
    //   }).exec()
    // const match = await School.find({
    //   staff: 'b'
    //   })
    //   .sort({ openSince: -1})
    //   .limit(2)
    //   .exec()
    // console.log(match)
    // const school = await School.findOneAndUpdate(
    //   { name: 'mlk elementary' },
    //   { name: 'mlk elementary'},
    //   { upsert: true, new: true}
    // ).exec()


  // const school = await School.create({ name: 'mlk elementary' }).exec()
  //   const student = await Student.create({ firstName: 'Trisha', school: school._id }).exec()
  //   const student2 = await Student.create({ firstName: 'Mark', school: school._id }).exec()

  //   const match = await Student.findOne({ firstName: 'Trisha'})
  //     .populate('school')
  //     .exec()

  // console.log(match)


    // const student = await Student.create({ firstName: 'Tim'})
    // const found = await Student.find({ firstName: 'thi'})
    // const foundById = await Student.findById('asdfasdf')
    // const updated = await Student.findByIdAndUpdate('asdfasdf', {})
    // console.log(student);
  // })
  // .catch(e => console.error(e))