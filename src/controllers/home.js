const { render } = require('ejs');
const axios = require('axios');
const https = require('https');

const agent = new https.Agent({
    rejectUnauthorized: false,
    requestCert: false,
    agent: false,
})

exports.Usuarios = (req, res) => {
    async function getUsuarios() {
        try {
            axios({
                    method: 'get',
                    url: 'http://localhost:5000/api/Usuario',
                    responseType: 'json',
                    withCredentials: true,
                    httpsAgent: agent
                })
                .then(function(response) {
                    console.log(response.data);
                    res.render('home', {
                        titulo: "algo"
                    })
                });
        } catch (error) {
            console.error(error);
        }
    }
    getUsuarios();
}


exports.insertUsuario = async(req, res) => {
    const user = req.body;
    const pass = req.body.pass;
    // let passwordHaash = await bcryptjs.hash(pass, 8);
    try {
        axios.post('https://localhost:44319/api/Usuario', {
                Correo: user.Correo,
                Contraseña: user.Contraseña,
                Nombre: user.Nombre,
                Apellido: user.Apellido,
                Edad: user.Edad,
                tipo: user.tipo,
                Telefono: user.Telefono,
                Pseudonimo: user.Pseudonimo,

            }, {
                responseType: 'json',
                withCredentials: true,
                httpsAgent: agent
            })
            .then(function(response) {
                // console.log(response.data);
                res.redirect('/Usuarios');
            });
    } catch (error) {
        console.error(error);
    }
}



exports.home = (req, res) => {
    res.render('home', {
        titulo: 'Home'
    })
}


exports.libros = (req, res) => {
    res.render('libros', {
        titulo: 'Home'
    })
}

exports.login = (req, res) => {
    res.render('login', {
        titulo: 'Home'
    })
}

exports.mensajes = (req, res) => {
    res.render('mensajes', {
        titulo: 'Home'
    })
}

exports.psicologo = (req, res) => {
    res.render('psicologo', {
        titulo: 'Home'
    })
}

exports.registro = (req, res) => {
    res.render('registro', {
        titulo: 'Home'
    })
}

exports.test = (req, res) => {
    res.render('test', {
        titulo: 'Home'
    })
}

exports.ubicacion = (req, res) => {
    res.render('ubicacion', {
        titulo: 'Home'
    })
}