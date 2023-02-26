import clientPromise from "../../lib/drawer/mongodb/clientPromis";

export default async (req, res) => {
    const {email}  = req.body
    try {
        const client = await clientPromise;
        const db = client.db("antimatter_users");
 
        const emailExists = await db
            .collection("emails")
            .findOne({
                "email":email
            })
        if(emailExists){
            return(
                res.json({
                    message:'Email is already registered',
                    success:false
                })
            )
        }
        else{
            try{
                await db
                .collection('emails')
                .insertOne({
                    email:email
                })
                return (res.json({
                    message:"Email has been received",
                    success:true
                }))
            }catch(err){
                return (res.json({
                    message:"Error : "+ err,
                    success:false
                }))
            }
        }
 
    } catch (err) {
        return (res.json({
            message:"Error : "+ err,
            success:false
        }))
    }
 };