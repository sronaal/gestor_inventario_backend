import app from './app.js'


const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {

    if ( error ) throw new Error(`Error: ${error}`)

    console.log(`Server running on port ${PORT}`) 
})