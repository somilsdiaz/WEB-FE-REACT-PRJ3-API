const Clients = [
  {
    "id": 100000,
    "nit": "123456789",
    "name": "Acme Corp",
    "address": "123 Business St",
    "city": "Metropolis",
    "country": "USA",
    "phone": "555-1234",
    "email": "contact@acmecorp.com",
    "active": true,
    "opportunities": ["101", "102"],
    "contacts": [
      {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@acmecorp.com",
        "phone": "555-5678"
      },
      {
        "firstName": "Jane",
        "lastName": "Smith",
        "email": "jane.smith@acmecorp.com",
        "phone": "555-8765"
      }
    ]
  },
  {
    "id": 200000,
    "nit": "987654321",
    "name": "Globex Inc.",
    "address": "456 Market Ave",
    "city": "Gotham",
    "country": "Canada",
    "phone": "555-4321",
    "email": "info@globex.com",
    "active": false,
    "opportunities": ["201", "202"],
    "contacts": [
      {
        "firstName": "Alice",
        "lastName": "Johnson",
        "email": "alice.johnson@globex.com",
        "phone": "555-6789"
      },
      {
        "firstName": "Bob",
        "lastName": "Brown",
        "email": "bob.brown@globex.com",
        "phone": "555-9876"
      }
    ]
  }
]


module.exports = Clients;
