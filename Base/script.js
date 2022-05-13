function entrar(){
    fetch("http://localhost:8080/usuario/query?correo=ver@hot.com")
        .then((data) => data.json())
        .then((dataJson) => console.log(dataJson));

    fetch("http://localhost:8080/usuario/quer?contrasena=veras")
    .then((dat) => dat.json())
    .then((datJson) => console.log(datJson));
    }
