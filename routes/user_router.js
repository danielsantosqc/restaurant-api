const express = require('express');
const response = require('./response');
const controller = require('../components/user/user_service');

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Holaaaa");
// });

router.get('/', (req, res) => {
  // console.log(req.headers);
  controller
    .getUsers()
    .then((listUser) => {
      response.success(req, res, listUser, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Error Inesperado', 500, e);
    });
});

router.post('/', (req, res) => {
  controller
    .addUser(req.body.email, req.body.password)
    .then((result) => {
      response.success(req, res, 'creado correctamente', 200);
      console.log(result);
    })
    .catch((e) => {
      response.error(req, 400, 'Error en el contenido del Body', res, e);
    });
});

router.patch('/:id', (req, res) => {
  controller
    .updateUser(req.params.id, req.body.password)
    .then((result) => {
      response.success(req, res, 'actualizado correctamente ', 201);
      console.log(result);
    })
    .catch((e) => {
      response.error(req, res, 'error inesperado', 400);
    });
});

router.delete('/:id', (req, res) => {
  controller
    .deleteUser(req.params.id)
    .then((result) => {
      response.success(req, res, 'usuario borrado ');
      console.log(result);
    })
    .catch((e) => {
      response.error(req, res, 'error inesperado', 400);
    });
});

module.exports = router;
