const FollowUp = [
    {
        opportunityId: "101",
        followUpActivities: [
            {
                contactType: "llamada",
                contactDate: "2024-11-05",
                clientContact: {
                    firstName: "John",
                    lastName: "Doe",
                    email: "john.doe@acmecorp.com",
                    phone: "555-5678"
                },
                salesExecutive: "Maria Perez",
                description: "Llamada inicial para discutir la expansión del mercado.",
                additionalNotes: "Cliente interesado en continuar con el proyecto."
            },
            {
                contactType: "correo",
                contactDate: "2024-11-10",
                clientContact: {
                    firstName: "Jane",
                    lastName: "Smith",
                    email: "jane.smith@acmecorp.com",
                    phone: "555-8765"
                },
                salesExecutive: "Maria Perez",
                description: "Correo de seguimiento sobre los términos de la consultoría.",
                additionalNotes: "Cliente pidió detalles adicionales sobre el contrato."
            }
        ]
    },
    {
        opportunityId: "202",
        followUpActivities: [
            {
                contactType: "reunión presencial",
                contactDate: "2024-09-05",
                clientContact: {
                    firstName: "Bob",
                    lastName: "Brown",
                    email: "bob.brown@globex.com",
                    phone: "555-9876"
                },
                salesExecutive: "Carlos Rodriguez",
                description: "Reunión para discutir la colaboración con la universidad.",
                additionalNotes: "Requiere ajustes en el presupuesto."
            }
        ]
    }
];

module.exports = FollowUp;
