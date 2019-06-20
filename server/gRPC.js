const grpc = require("grpc")
const protoLoader = require("@grpc/proto-loader")
const path = require("path")
const PROTO_PATH = path.join(__dirname, "..", "proto", "response.proto")
const packageDefinition = protoLoader.loadSync(PROTO_PATH)
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)
const { CommonService } = protoDescriptor

const grpcControllers = require("./grpcControllers")

const server = new grpc.Server()
server.addService(CommonService.service, {
  GetCustomer: grpcControllers.GetCustomer,
  GetCustomers: grpcControllers.GetCustomers
})

server.bind("127.0.0.1:3001", grpc.ServerCredentials.createInsecure())
server.start()
