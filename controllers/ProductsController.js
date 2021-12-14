const createProduct = (req, res) => {
    return res.send({ message: 'Hola desde create products!' })
}

const findAllProducts = (req, res) => {
    return res.send({ message: 'Hola desde read all!' })
}

const findOneProduct = (req, res) => {
    return res.send({ message: 'Hola desde read one!' })
}

const updateProduct = (req, res) => {
    return res.send({ message: 'Hola desde update!' })
}

const deleteProduct = (req, res) => {
    return res.send({ message: 'Hola desde delete!' })
}

const destroyProduct = (req, res) => {
    return res.send({ message: 'Hola desde destroy!' })
}


module.exports = {
    createProduct,
    findAllProducts,
    findOneProduct,
    updateProduct,
    deleteProduct,
    destroyProduct
};