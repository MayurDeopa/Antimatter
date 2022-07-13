import apiUrl from '../../lib/drawer/url'

export const getBannerData =async(query)=>{
    try{
        const res = await fetch(`${apiUrl}/banners?query=${query}`,{
            method:"GET",
            headers:{"Content-Type" :"application/json"},
        })
        return res.json()
    }
    catch(err){
        return err
    }
}