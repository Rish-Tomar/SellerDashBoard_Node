import Seller from "../model/seller.js";

const addCategory=async(req,res)=>{
    if(req.body.category.length>0){
        console.log('category to be entered is :',req.body.category)
        const seller=await Seller.findById(req.params.id)
         
        if(seller){
            const arr=seller.category
            console.log('category',arr)
            if(arr.length>0){
                var categoryExists=arr.find(ele=>{ ele===req.body.category})
            }
            if(!categoryExists){
                seller.category.push(req.body.category)
                seller.save()
                console.log('Category Created')
                return res.redirect('back')
            }
        }

    }   
    console.log('seller not found')
    return
}
const addSubCategory=()=>{

}
const addInventory=()=>{

}

export {addCategory,addSubCategory,addInventory}