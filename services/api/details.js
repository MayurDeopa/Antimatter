import apiUrl from "../../lib/drawer/url"


export const getDetails = async(id)=>{
    try{
        const res = await fetch(`${apiUrl}/details/?id=${id}`,{
            method:'get',
            headers:{"Content-Type" :"application/json"}
        })
        return res.json()
    }catch(err){
        console.log(err)
        return err
    }
}


export const sendDetails =async(data)=>{
    const {id,details,type} = data
    console.log(type)
    try{
        if(type==='personal'){
            const res = await fetch(`${apiUrl}/details/personal?id=${id}`,{
                method:"post",
                headers:{"Content-Type" :"application/json"},
                body:JSON.stringify(details)
            })
            return res.json()
        }
        else{
            const res = await fetch(`${apiUrl}/details/shipping?id=${id}`,{
                method:"post",
                headers:{"Content-Type" :"application/json"},
                body:JSON.stringify(details)
            })
            return res.json()
        }
    }
    catch(err){
        console.log(err)
        return err
    }
}
