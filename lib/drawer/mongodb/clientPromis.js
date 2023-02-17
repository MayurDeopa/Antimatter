import { MongoClient } from 'mongodb'



const uri = 'mongodb://mayur3301:3301@cluster0-shard-00-00.b24rp.mongodb.net:27017,cluster0-shard-00-01.b24rp.mongodb.net:27017,cluster0-shard-00-02.b24rp.mongodb.net:27017/?ssl=true&replicaSet=atlas-9nkwrp-shard-0&authSource=admin&retryWrites=true&w=majority'
const options = {}

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise