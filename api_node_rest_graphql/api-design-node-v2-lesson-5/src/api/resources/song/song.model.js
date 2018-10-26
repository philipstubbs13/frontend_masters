import mongoose from 'mongoose'

export const schema = {
  
}

const songSchema = new mongoose.Schema(schema)

// songSchema.pre('validate', function() {

// })
export const Song = mongoose.model('song', songSchema)




// const dogSchema = {
//   name: {
//     type: String,
//     required: true,
//     unique: true
//   },

//   isOld: {
//     type: Boolean,
//     required: true,
//     default: false
//   },

//   owner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'owner'
//   },

//   faveFoods: [String]
// }

