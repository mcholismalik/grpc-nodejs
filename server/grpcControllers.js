let customers = [
  { id: 1, name: 'Cholis' },
  { id: 2, name: 'Tahsin' },
  { id: 3, name: 'Rey' }
]

const GetCustomer = (call, cb) => {
  let result = customers.filter(v => v.id == call.request.id)

  cb(null, ...result)
}

const GetCustomers = (call, cb) => {
  let result = {customers: customers}

  cb(null, result)
}

module.exports = {
  GetCustomer,
  GetCustomers
}
