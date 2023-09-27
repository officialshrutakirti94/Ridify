const mongoose=require ('mongoose')
const driverSchema=new mongoose.Schema({
    id: Number,
    name: String,
    license_number: String,
    bike_make: String,
    bike_model: String,
    bike_plate_number: String,
    phone: Number,
    rating: Number,
    image_url: String

})
mongoose.model('drivers',driverSchema)