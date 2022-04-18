

export const getDetails = async(id)=>{
    try{
        const res = await fetch(`http://localhost:8000/details/?id=${id}`,{
            method:'get',
            headers:{"Content-Type" :"application/json"}
        })
        return res.json()
    }catch(err){
        console.log(err)
        return err
    }
}


export const sendPersonal =async(data)=>{
    try{
        const res = await fetch('http://localhost:8000/details/personal',{
            method:"post",
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify(data)
        })
        return res.json()
    }
    catch(err){
        console.log(err)
        return err
    }
}

export const sendShipping =async(data)=>{
    try{
        const res = await fetch('http://localhost:8000/details/shipping',{
            method:"post",
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify(data)
        })
        return res.json()
    }
    catch(err){
        console.log(err)
        return err
    }
}