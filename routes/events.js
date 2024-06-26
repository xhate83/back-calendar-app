
/*
    Rutas de usuario / Events
    host + /api/events
*/
const { 
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
} = require('../controllers/events');
const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-jwt');
const {validarCampos} = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');



router.use(validarJWT)

// Obtener eventos
router.get('/', getEventos)

// Crear un evento
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha inicio es obligatoria').custom(isDate),
        check('end', 'La fecha fin es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento
)

// Actualizar un evento
router.put(
    '/:id',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ],
    actualizarEvento)

// Borrar un evento
router.delete('/:id', eliminarEvento)


module.exports = router;