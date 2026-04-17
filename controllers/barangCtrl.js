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

        res.status(200).json({
            message: 'all adata found successfully',
            data: barang
        })
    } catch (err) {
        res.status(500).json({ message: 'server error'})
    }
}

exports.getBarangById = async (req, res) => {
    try {
        const barang = await Barang.findByPk(req.params.id);

        if (!barang) {
            return res.status(404).json({message: 'err not found'})
        }

        res.status(200).json({
            message: 'found successfully',
            data: barang
        })
    } catch (err) {
        res.status(500).json({ message: 'server error'})
    }
}

exports.updateBarang = async (req, res) => {
    try {
        const barang = await Barang.findByPk(req.params.id);
        
        if (!barang) {
            return res.status(404).json({message: 'err not found'})
        }

        await barang.update({
            name: req.body.name ?? barang.name,
            stok: req.body.stok ?? barang.stok,
        })

        res.status(200).json({
            message: 'updated successfully',
            data: barang
        })
    } catch (err) {
        res.status(500).json({message: 'server error'})
    }
}

exports.deleteBarang = async (req, res) => {
    try {
        const barang = await Barang.findByPk(req.params.id);
        
        if (!barang) {
            return res.status(404).json({message: 'err not found'})
        }

        await barang.destroy();

        res.status(200).json({
            message: 'deleted successfully',
        })
    } catch (err) {
        res.status(500).json({message: 'server error'})
    }
}