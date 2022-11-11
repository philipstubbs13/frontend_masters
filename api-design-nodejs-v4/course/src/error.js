setTimeout(() => {
    throw new Error('oops')
}, 300)

process.on('uncaughtException', () => {

})

process.on('unhandledRejection', () => {
    
})