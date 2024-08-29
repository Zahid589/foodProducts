import Products from "../Model/productsModel.js";

export const addProd = async(req,res) => {
    try{
    const {name, price, stock} = req.body
    if(name && price && stock)
    {
       
            await Products.create({
                name,
                price,
                stock
            }).catch(err=>{throw err})
            console.log('Products are successfully added')
            res.json('Products are successfully added')
        
     
    }
}
    catch(err){
        res.json('Failed to add Products')
    }
}

export const listOfProd = async(req,res) => {
    try{
        const products = await Products.find()
        res.json(products)
    }
    catch(err){
        res.json('Failed to retrieve list of Products')
    }
} 