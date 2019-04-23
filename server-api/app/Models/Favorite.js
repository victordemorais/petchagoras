'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Favorite extends Model {
  user () {
    return this.belongsToMany('App/Models/User')
  }
  product () {
    return this.belongsTo('App/Models/Product')
  }
}

module.exports = Favorite
