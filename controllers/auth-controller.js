const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/user');
const { generarJWT } = require('../helpers/jwt');
const { googleVerify } = require('../helpers/google-verify');

const login = async (req, res = response) => {

    const {email, password} = req.body;
    try {
        // Verifica el email 
        const usuarioDB = await Usuario.findOne({email});
        if (!usuarioDB){
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        // Valida la contraseña
        const validPassword = bcrypt.compareSync( password, usuarioDB.password );
        if (!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no valida'
            });
        }

        // Generar un TOKEN -JWT
        const token = await generarJWT(usuarioDB.id);


        res.json({
            ok: true,
            token,
            menu: getMenuFront(usuarioDB.role )
        });
    } catch (e) {

        console.log(e);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const googleSingIn = async(req, res = response)=> {

    const googleToken = req.body.token;

    try {

        const { name, email, picture } = await googleVerify(googleToken);

        const usuarioDB = await Usuario.findOne({email}); 
        let usuario;
        if (!usuarioDB){
            // si no existe un usuario
            usuario = new Usuario({
                nombre: name,
                email,
                password: '@@@',
                img: picture,
                google: true
            });
        } else {
            // exite usuario
            usuario = usuarioDB;
            usuario.google = true;
        }

        // Guardar en DB
        await usuario.save();

        // Generar un TOKEN -JWT
        const token = await generarJWT(usuario.id);

        res.json({
            ok: true,
            token,
        });
    
    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token no es correcto',
        });
    }
}

const renewToken = async(req, res = response) => {


    const uid = req.uid;
    // Generar un TOKEN -JWT
    const token = await generarJWT(uid);

    const usuario = await Usuario.findById(uid);
    res.json({
        ok: true,
        token,
        usuario,
    });
}

module.exports = {
    login,
    googleSingIn,
    renewToken
}