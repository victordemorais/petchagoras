'use strict'
const Product = use('App/Models/Product')

class ProductController {
  async index ({ request, response, view }) {
    const products = await Product.query()
      .with('user')
      .with('file')
      .fetch()

    return products
  }

  async store ({ request, response, auth }) {
    const data = request.only(['name', 'description', 'value', 'file_id'])
    const product = await Product.create({ ...data, user_id: auth.user.id })
    return product
  }

  async show ({ params }) {
    const product = await Product.findOrFail(params.id)
    await product.load('user')
    await product.load('file')
    return product
  }

  async update ({ params, request, response }) {
    const product = await Product.findOrFail(params.id)
    const data = request.only(['name', 'description', 'value', 'file_id'])
    product.merge(data)
    await product.save()
    return product
  }

  async destroy ({ params, request, response }) {
    const product = await Product.findOrFail(params.id)
    product.delete()
  }
}

module.exports = ProductController
