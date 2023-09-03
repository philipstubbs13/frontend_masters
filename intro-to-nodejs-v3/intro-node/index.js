#!/usr/bin/env node
import { count } from "./utils.js"
const { count } = require('./utils.js')
import whatever from './utils.js'
import fs from 'fs'

const note = process.argv[2];
const newNote = {
    content: note,
    id: Date.now()
}

console.log(newNote);