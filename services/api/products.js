
export const getProductCategories =async()=>{
    try{
        const res = await fetch(`${API_URL}/products/categories`,{
            method:"GET",
            headers:{"Content-Type" :"application/json"},
        })
        return res.json()
    }
    catch(err){
        return err
    }
}


export const getProductCategory =async(slug)=>{
    try{
        const res = await fetch(`${API_URL}/products/category?slug=${slug}`,{
            method:"GET",
            headers:{"Content-Type" :"application/json"},
        })
        return res.json()
    }
    catch(err){
        return err
    }
}

export const getProductById =async(id)=>{
    try{
        const res = await fetch(`${API_URL}/products/product?id=${id}`,{
            method:"GET",
            headers:{"Content-Type" :"application/json"},
        })
        return res.json()
    }
    catch(err){
        return err
    }
}

