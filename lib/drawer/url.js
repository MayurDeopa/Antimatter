
let apiUrl = process.env.NODE_ENV==='prod'?`https://anit-server.vercel.app`:`http://localhost:8800`

/*https://antimatter-server.herokuapp.com
    http://localhost:8000
*/

module.exports = apiUrl;