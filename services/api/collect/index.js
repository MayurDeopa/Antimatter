import apiUrl from "../../../lib/drawer/url"


const asyncHandler = async(fn)=>{
    try{
        return await fn()
    }catch(err){
        return {
            data:null,
            error:err
        }
    }
}

export const collect = {
    email: async (email) => {
        return await asyncHandler(async()=>{
          const res = await fetch(`${apiUrl}/collect/email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
            }),
          });
        
          if (!res.ok) {
            // If response status is not in the range 200-299, throw an error
            throw new Error(`Error: ${res.status}`);
          }
        
          const data = await res.json(); // Assuming the response is JSON
          return {
            data: data,
            error: null,
          };
        })
      },
    contactQuery: async (body) => {
      return await asyncHandler(async()=>{
        const res = await fetch(`${apiUrl}/collect/contact-query`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
      
        if (!res.ok) {
          // If response status is not in the range 200-299, throw an error
          throw new Error(`Error: ${res.status}`);
        }
      
        const data = await res.json(); // Assuming the response is JSON
        return {
          data: data,
          error: null,
        };
      })
    }
}