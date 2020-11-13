const {apollo,gql}=requiere('apollo-server');





//servidor
const server = new ApolloServer();


//Arrancar el servidor
server.listen().then(({url})=>{
     console.log(`Servidor listo en la URL ${url}`);
})
   