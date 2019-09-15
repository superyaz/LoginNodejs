var Usuario = require('./../models/userModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


let index = (req, res) => {
    Usuario.find({}).exec((err, datos) => {
        return res.json({
            datos
        });
    });
}

let guardar = (req, res) => {
    let usuario = new Usuario({
        usuario: req.body.usuario,
        clave: bcrypt.hashSync(req.body.clave, 10)
    });
    usuario.save((err, usuarioNew) => {
        if (!req.body.usuario || !req.body.clave) {
            res
                .status(400)
                .send("You need a user and password");
            return;
        }
        return res.status(200).json({
            ok: true,
            usuario: usuarioNew
        });
    });
}

let ver = (req, res) => {
    Usuario.findById(req.params.id).exec((err, datos) => {
        return res.json({
            datos
        });
    });
}

let modificar = (req, res) => {
    let usuario = {
        usuario: req.body.usuario,
        clave: bcrypt.hashSync(req.body.clave, 10),
    }
    usuario.findByIdAndUpdate(req.params.id, usuario, { new: true }, (err, usuarioNew) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        return res.json({
            ok: true,
            usuarioNew
        });
    })
}


let eliminar = (req, res) => {
    usuario.findByIdAndUpdate(req.params.id, usuario, { estado: req.params.estado }, { new: true }, (err, usuarioNew) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        return res.json({
            ok: true,
            usuarioNew
        });
    })
}








module.exports = {
    index,
    guardar,
    ver,
    modificar,
    eliminar,
}


