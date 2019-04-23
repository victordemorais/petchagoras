'use strict'

const Favorite = use('App/Models/Favorite')
class FavoriteController {
  async index ({ request, response, view, auth }) {
    const favorite = await Favorite.query()
      .where('user_id', auth.user.id)
      .fetch()
    return favorite
  }

  async store ({ request, auth }) {
    const data = request.only(['product_id'])
    const favorite = await Favorite.findOrCreate({
      ...data,
      user_id: auth.user.id
    })
    return favorite
  }

  async show ({ params, auth }) {
    const favorite = await Favorite.query()
      .where('user_id', auth.user.id)
      .where('product_id', params.id)
      .fetch()
    return favorite
  }

  async destroy ({ params, auth }) {
    await Favorite.query()
      .where('user_id', auth.user.id)
      .where('product_id', params.id)
      .delete()
  }
}

module.exports = FavoriteController
