import Seller from "../model/seller.js"

const home=(req,res)=>{
    return res.render('home',{
        title:'Homepage'
    })
}

const register=(req,res)=>{
    return res.render('register',{
        title:'Registration'
    })
}

const login=(req,res)=>{
    return res.render('login',{
        title:'Seller Login'
    })
}

const loginUser=async (req,res)=>{
    console.log("User Login DAta",req.body)
    const userExist=await Seller.findOne({email:req.body.email})
    if(userExist){
        return res.render('sellerDashBoard',{
            title:"Seller Dashboard",
            user:userExist.businessName,
            email:userExist.email,
            id:userExist._id
        })
    }
    console.log('No such User Exists')
    return res.redirect('back')
}

const signup=async(req,res)=>{
    console.log("recieved data",req.body)
    
    // handle password and confirm password
    if(req.body.password!==req.body.confirmPassword){
        console.log('password and confirm not same')
        res.redirect('back')
    }

    //checking if user exist
    const user=await Seller.findOne({email:req.body.email})
    if(!user){
        const createUser=await Seller.create({
            email:req.body.email,
            password:req.body.password,
            businessName:req.body.businessName,
        })

        if(createUser){
            console.log("User is created")
            return res.redirect('/login')
        }
    }
    return res.redirect('back')
}

const sellerURl =async (req,res)=>{
    console.log('seller id is',req.params)
    const seller=await Seller.findById(req.params.id)
    if(seller){
        return res.render('userHome',{
            title:'Customer',
            seller:seller.businessName
        })
    }
    return res.render('userHome',{

    })
}

export {home,register,signup,login,loginUser,sellerURl}