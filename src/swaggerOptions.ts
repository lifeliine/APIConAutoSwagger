export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'API Tasks',
            version: '1.0.0',
            description: 'A simple Api made with express'
        },
        servers: [
            {
                url:'http://localhost:3000'
            }
        ]
    },
    apis: ['./src/routes/*.ts']
}