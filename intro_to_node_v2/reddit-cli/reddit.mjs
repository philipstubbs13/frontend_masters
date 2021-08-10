#! /usr/bin/env node
import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'

const { argv } = yargs(process.argv)      

const res = await fetch('https://reddit.com/.json')
const data = await res.json()
const children = data.data.children
const randomIndex = Math.floor(Math.random() * children.length)
const randomPost = children[randomIndex]
const link = `https://reddit.com${randomPost.data.permalink}`

if (argv.print) {
  console.log(`
    title: ${randomPost.data.title}
    link: ${link}
  `)
} else {
  open(link)
}