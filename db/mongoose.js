const mongoose = require("mongoose")


mongoose.connect(process.env.MONGODB_URL,{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log(`Connected to The database ${mongoose.connection.host}`)
}).catch(e => {
    console.log(e)
})