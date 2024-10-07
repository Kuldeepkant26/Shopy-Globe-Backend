const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    owner: {
        required: false,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users' // Reference to the "Reviews" model
    }
})

module.exports = mongoose.model('Products', productSchema);

// data = [{
//     title: "Microwave Oven",
//     description: "Quickly heat up food and drinks",
//     price: 3999,
//     stock: 115,
//     category: "kitchen appliances",
//     image: "https://images.unsplash.com/photo-1523170003438-964d4f9a834e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtvbGZlIG1ha2VyfGVsbnwxfDB8MHxzZWFyY2h8MTYzMTM4Mzg0Nw%3D%3D",
//     owner: mongoose.Types.ObjectId("67019efe65b33704ac0d369c") // Use mongoose.Types.ObjectId
// },
// {
//     title: "Vacuum Cleaner",
//     description: "Keep your home clean and tidy",
//     price: 6999,
//     stock: 82,
//     category: "home appliances",
//     image: "https://images.unsplash.com/photo-1504207935-f1e1f8b4e042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmRvY2hlfGVubnwxfDB8MHxzZWFyY2h8MTYzMTM4Mzg0Nw%3D%3D",
//     owner: mongoose.Types.ObjectId("67019efe65b33704ac0d369c")
// },
// {
//     title: "Electric Kettle",
//     description: "Boil water quickly and easily",
//     price: 1999,
//     stock: 138,
//     category: "kitchen appliances",
//     image: "https://images.unsplash.com/photo-1542969717-07015489f452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYXJ0d2F0Y2hlfGVubnwxfDB8MHxzZWFyY2h8MTYzMTM4Mzg0Nw%3D%3D",
//     owner: mongoose.Types.ObjectId("67019efe65b33704ac0d369c")
// },
// {
//     title: "Smartwatch",
//     description: "Track your fitness and stay connected",
//     price: 14999,
//     stock: 63,
//     category: "wearable technology",
//     image: "https://images.unsplash.com/photo-1542969717-07015489f452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYXJ0d2F0Y2hlfGVubnwxfDB8MHxzZWFyY2h8MTYzMTM4Mzg0Nw%3D%3D",
//     owner: mongoose.Types.ObjectId("67019efe65b33704ac0d369c")
// },
// {
//     title: "Wireless Charger",
//     description: "Charge your devices without cables",
//     price: 2999,
//     stock: 101,
//     category: "electronic accessories",
//     image: "https://images.unsplash.com/photo-1584802423728-b634080ff944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
//     owner: mongoose.Types.ObjectId("67019efe65b33704ac0d369c")
// },
// {
//     title: "Gaming Console",
//     description: "Experience immersive gaming at home",
//     price: 39999,
//     stock: 27,
//     category: "entertainment devices",
//     image: "https://images.unsplash.com/photo-1506936298322-e70988fa78ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJ1bm5pbmc!&fz=me&ca=OS",
//     owner: mongoose.Types.ObjectId("67019efe65b33704ac0d369c")
// },
// {
//     title: "Camera",
//     description: "Capture stunning photos and videos",
//     price: 29999,
//     stock: 42,
//     category: "photography equipment",
//     image: "https://images.unsplash.com/photo-1523170003438-964d4f9a834e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtvbGZlIG1ha2VyfGVsbnwxfDB8MHxzZWFyY2h8MTYzMTM4Mzg0Nw%3D%3D",
//     owner: mongoose.Types.ObjectId("67019efe65b33704ac0d369c")
// },
// {
//     title: "Tablet",
//     description: "Portable entertainment and productivity device",
//     price: 19999,
//     stock: 78,
//     category: "electronic devices",
//     image: "https://images.unsplash.com/photo-1504207935-f1e1f8b4e042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmRvY2hlfGVubnwxfDB8MHxzZWFyY2h8MTYzMTM4Mzg0Nw%3D%3D",
//     owner: mongoose.Types.ObjectId("67019efe65b33704ac0d369c")
// },
// {
//     title: "Blender",
//     description: "Blend smoothies, soups, and more",
//     price: 4999,
//     stock: 123,
//     category: "kitchen appliances",
//     image: "https://images.unsplash.com/photo-1542969717-07015489f452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYXJ0d2F0Y2hlfGVubnwxfDB8MHxzZWFyY2h8MTYzMTM4Mzg0Nw%3D%3D",
//     owner: mongoose.Types.ObjectId("67019efe65b33704ac0d369c")
// },
// {
//     title: "Bike",
//     description: "Get fit and explore your surroundings",
//     price: 12999,
//     stock: 95,
//     category: "sports equipment",
//     image: "https://images.unsplash.com/photo-1584802423728-b634080ff944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
//     owner: mongoose.Types.ObjectId("67019efe65b33704ac0d369c")
// }]