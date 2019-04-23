const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('forgotpassword', 'ForgotPasswordController.store')
Route.put('forgotpassword', 'ForgotPasswordController.update')

Route.get('/files/:id', 'FileController.show')

Route.group(() => {
  Route.post('/files', 'FileController.store')

  Route.resource('/products', 'ProductController').apiOnly()
  Route.resource('/favorites', 'FavoriteController').apiOnly()
}).middleware(['auth'])
