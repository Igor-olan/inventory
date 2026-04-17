const {Barang} = require('../models');

exports.createBarang = async (req, res) => {
    try {
        if (!req.body.title) {
            return res.status(400).json({message: 'required'})
        }

        const barang = await Barang.create({
            userId: req.body.userId,
            name: req.body.name,
            stok: req.body.stok
        })

        res.status(201).json({
            message: 'success',
            data: barang
        })

    } catch (err) {
        res.status(500).json({message: 'server error'})
    }
}

exports.getBarang = async (req, res) => {
    try {
        const barang = await Barang.finAll({
            where: {userId: req.user.id}
        });
    } catch (err) {
        res.status(500).json({ message: 'server error'})
    }
}

exports.getBarangById = async (req, res) => {
    try {
        const barang = await Barang.findByPk(req.params.id);
    } catch (err) {
        res.status(500).json({ message: 'server error'})
    }
}