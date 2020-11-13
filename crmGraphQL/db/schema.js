const { gql } = require('apollo-server');

//schema
const typeDefs = gql `    
    type Curso{
        titulo: String
        

    }

    type Tecnologia{
        tecnologia : String
    }

    type Query{
        obtenerCursos : [Curso]
        obtenerTecnologia : [Tecnologia]
    }
`;


module.exports=typeDefs;