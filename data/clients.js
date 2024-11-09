const Clients = [
  {
    "id": 1,
    "nit": "123456789",
    "name": "Acme Corp",
    "address": "123 Business St",
    "city": "Metropolis",
    "country": "USA",
    "phone": "555-1234",
    "email": "contact@acmecorp.com",
    "active": true,
    "opportunities": [
      { "id": 101, "name": "Expansion Project" },
      { "id": 102, "name": "Partnership Deal" }
    ],
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
    "id": 2,
    "nit": "987654321",
    "name": "Globex Inc.",
    "address": "456 Market Ave",
    "city": "Gotham",
    "country": "Canada",
    "phone": "555-4321",
    "email": "info@globex.com",
    "active": false,
    "opportunities": [
      { "id": 201, "name": "New Product Launch" },
      { "id": 202, "name": "Research Collaboration" }
    ],
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
