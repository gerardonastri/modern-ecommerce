import dbConnect from "../../util/mongo";
import Product from '../../models/Product'


const handler = async (req,res) => {
  await dbConnect()
  if(req.method === "GET"){
    try {
      const products = await Product.find()    
      res.status(200).json(products)
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
  }
    if(req.method === "POST"){
      const {name, details, price, image} = req.body;
      try {
          const product = await Product.create({
                name,
                details,
                price,
                image
          });
          res.status(200).json(product)
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
    if(req.method === "PUT"){
      const {id} = req.body;
      try {
        
          res.status(200).json()
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
    if(req.method === "DELETE"){
      const {id} = req.body;
      try {
          
          res.status(200).json('Task deleted')
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
}

export default handler