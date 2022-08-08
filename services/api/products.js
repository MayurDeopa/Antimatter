import apiUrl from '../../lib/drawer/url'
import {commerce} from '../../lib/drawer/commerce'

export const getProductCategories =async()=>{
    try{
        const res = await commerce.categories.list()
        return res
    }
    catch(err){
        return err
    }
}


export const getProductCategory =async(slug)=>{
    try{
        const res = await commerce.products.list({
            category_slug:slug
        })
        return res
    }
    catch(err){
        return err
    }
}

export const getProductById =async(id)=>{
    try{
        const res = await commerce.products.retrieve(id)
        return res
    }
    catch(err){
        return err
    }
}

