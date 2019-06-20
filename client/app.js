const grpc = require("grpc")
const protoLoader = require("@grpc/proto-loader")
const path = require("path")
const PROTO_PATH = path.join(__dirname, "..", "proto", "response.proto")
const packageDefinition = protoLoader.loadSync(PROTO_PATH)
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)
const { CommonService } = protoDescriptor
const { promisify } = require('util')

const client = new CommonService(
  "127.0.0.1:3001",
  grpc.credentials.createInsecure()
)

client.GetCustomer = promisify(client.GetCustomer)
client.GetCustomers = promisify(client.GetCustomers)

const GetCustomer = async () => {
  const data = await client.GetCustomer({ id: 1 })
  console.log(data)
}

const GetCustomers = async () => {
  const data = await client.GetCustomers({})
  console.log(data)  
}

GetCustomer()
GetCustomers()
