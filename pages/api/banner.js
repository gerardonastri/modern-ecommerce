import dbConnect from "../../util/mongo";
import Banner from '../../models/Banner'



const handler = async (req,res) => {
  await dbConnect()
  if(req.method === "GET"){
    
    try {
        const banner = await Banner.findOne()    
        res.status(200).json(banner)
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
  }
    if(req.method === "POST"){
      const {name, image, description, smallText, midText, largeText, largeText2, discount, saleTime} = req.body;
      try {
          const banner = await Banner.create({
            name,
            description,
            smallText,
             midText,
            largeText,
            largeText2,
            discount,
            saleTime,
            image
          });
          res.status(200).json(banner)
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
    if(req.method === "PUT"){
      const {id} = req.body;
      try {
          const task = await Todo.findById(id)
          const newTask = await Todo.findByIdAndUpdate(id, {completed: !task.completed})
          res.status(200).json(newTask)
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
    if(req.method === "DELETE"){
      const {id} = req.body;
      try {
          const task = await Todo.findByIdAndDelete(id)
          res.status(200).json('Task deleted')
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
}

export default handler