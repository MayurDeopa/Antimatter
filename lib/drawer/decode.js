import jwt from 'jsonwebtoken'

export const decodeJwt=(payload)=>{
    const response = jwt.decode(payload)
    return response
}