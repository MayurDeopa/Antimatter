export const getCart =async(data)=>{
    try{
        const res = await fetch(`http://localhost:8000/cart/?id=${data}`,{
            method:"GET",
            headers:{"Content-Type" :"application/json"},
        })
        return res.json()
    }
    catch(err){
        return err
    }
}

export const addToCart =async(data)=>{
    try{
        const res = await fetch(`http://localhost:8000/cart/add`,{
            method:"post",
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify(data)
        })
        return res.json()
    }
    catch(err){
        return err
    }
}

export const mutateQty =async(data)=>{
    try{
        const res = await fetch(`http://localhost:8000/cart/mutate`,{
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