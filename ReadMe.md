
<h4  style="text-align:center" > <font color="red">npm start</font> para levantar el servidor </h4>
<h5  style="text-align:center" > para poblar la DB como primer comando ingresar desde postman a la ruta POST: <br> <font color="blue">localhost:8080/api/products/many</font> </h5> 


---
<h3  style="text-align:center" >----> TESTING <---</h3> 
<h6  style="text-align:center" > Mantuve el criterio de hacer funcionar el sitio y los endpoints usando plantillas de handlebars, los endpoints accedidos desde postman funcionan también pero algunos de los mensajes de error son renders de hbs directamente porque puse el acento ahí</h6>
<br>
<h6  style="text-align:center" > la interfaz grafica solo permite crear usuarios tipo user, para crear usuarios con rol admin es necesario usar el endpoint http://localhost:8080/api/users/register con postman, una vez creado el logueo con la interfaz visual permite navegar al view  http://localhost:8080/adminsection donde se pueden cargar y borrar productos de la DB   </h6> 
<br>
<h4  style="text-align:center" > Se agrega la lista completa de endpoints de la app agrupadas con descripcion y comentarios:</h4> 
<br> 



| METHOD         | ROUTE                                       | COMMENT                                                                                                                                                                                      |
| -------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET            | /api/products/:pid                          | Busqueda de producto por id                                                                                                                                                                  |
| GET POST       | /api/products                               | GET - Busqueda de producto por sin id acepta pagginate, sort, limit y filtro por status / POST - Agregado de producto a la BD incluye validación básica en caso de que esten faltando campos |
| PUT DELETE     | /api/products/:id                           | PUT - Modificaicón de productos por id, se actualizan valores y se hace validación básica de campos / DELETE - Elmina el producto con el id especificado                                     |
| POST           | /api/products/many                          | Ruta de inserción masiva de productos en la DB en caso de que se este corriendo en un cluster nuevo                                                                                          |
| GET POST       | /api/cart                                   | GET - Lista todos los carritos registrados en la App / POST Crea un carrito nuevo                                                                                                            |
| GET PUT DELETE | /api/cart/:cid                              | GET - Busqueda de carrito por ID / PUT - Edición del carrito especificado / DELETE - Borra el carrito especificado                                                                           |
| POST           | /api/cart/:cid/purchase                     | POST - Completa la operación de compra del carrito con id seleccionado                                                                                                                       |
| POST DELETE    | /api/cart/:cid/product/:pid                 | POST - Incorpora producto seleccionado al carrito / DELETE - Elimina producto seleccionado del carrito                                                                                       |
| POST           | /api/users/register                         | Endpoint de registro usando postman // Permite la creación de usuarios con rol "admin"                                                                                                       |
| POST           | /api/users/login                            | Endpoint de logueo usando postman                                                                                                                                                            |
| POST           | /api/users/logout                           | Endopoint de logout usando postman                                                                                                                                                           |
| POST           | /users/register                             | Endpoint de HBS para registro de nuevos usuarios // no permite registro de usuarios admin                                                                                                    |
| POST           | /users/login                                | Endpoint de HBS para el logueo de usuarios                                                                                                                                                   |
| POST           | /users/logout                               | Endpoint de HBS para el logout de usuarios                                                                                                                                                   |
| GET            | /users/register-github                      | Endpoint de HBS para el logueo usando Github                                                                                                                                                 |
| GET            | /users/github                               | Endpoint de HBS para el logueo usando Github                                                                                                                                                 |
| GET            | /users/oauth2/redirect/accounts.google.com  | Endpoint de HBS para el logueo usando Google                                                                                                                                                 |
| GET            | /users/register-google                      | Endpoint de HBS para el logueo usando Google                                                                                                                                                 |
| GET            | /                                           | Endpoint de HBS ---> ENTRADA A LA APLICACION                                                                                                                                                 |
| GET            | /register                                   | Endpoint de HBS para el render de registro de usuario                                                                                                                                        |
| GET            | /login                                      | Endpoint de HBS para el render del login                                                                                                                                                     |
| GET            | /loginError                                 | Endpoint de HBS para el render del logingError                                                                                                                                               |
| GET            | /user/profile                               | Endpoint de HBS para el render del profile                                                                                                                                                   |
| GET            | /products                                   | Devuelve la lista completa de productos en la DB                                                                                                                                             |
| POST           | /products/api/cart/:cid/product/:pid        | Endpoint de HBS para el render del carrito                                                                                                                                                   |
| GET            | /products/api/cart/:cid/product/delete/:pid | Endpoint de HBS para el render del carrito luego de cambio en su contenido                                                                                                                   |
| POST           | /products/api/cart/delete/:cid              | Endpoint de HBS para el render del carrito borrado completo                                                                                                                                  |
| GET            | /products/api/cart/:cid/purchase            | Endpoint de HBS para el render de la finalización de compra                                                                                                                                  |
| GET            | /adminsection                               | Endpoint de HBS para el render de la seccion de admin                           


<br>
<br>
