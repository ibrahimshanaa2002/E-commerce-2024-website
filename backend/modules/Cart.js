const mongoose = require('mongoose');

const CartSchema = mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    userId :{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    size : {type:String,required:true},
    color : {type:String , required:true}

    // mo3adale tb3et el total mjmo3 quantity *price  7a2 el wahde 
  },
  {
    timestamps: true, 
  }
);

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
