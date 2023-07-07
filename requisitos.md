# GET /api/productos

- Recupere de la base de datos todos los productos y devuelva un array en formato JSON con dichos productos.

PRUEBAS:
- Que la url funcione -> Status 200
- Que me devuelva un JSON -> Content-Type: application/json
- Que me devuelva un array -> []
- Que nos devuelve el número de productos esperados.

1. Creamos fichero routes/api.js
2. Creamos fichero routes/api/products.js
3. Todas las rutas que lleguen a app.js con la url /api hay que enviarlas a api.js
4. Todas las rutas que lleguen a api.js con la url /api/products hay que enviarlas a productos.js
5. Dentro de products.js respondemos a la peticion con res.send('Chachi pistachi')

# Creacion de productos

- POST /api/products
- Body: name, description, price, available, department, stock

PRUEBAS:
1. Que la url funcione -> status 200 y content-type application/json
2. Si tiene definido el _id
3. Comprobar si los datos insertados son correctos

# Editar un producto

- PUT /api/productos/IDPRODUCTO

Antes del test:
- Creo un producto

Después del test:
- Borro el producto

PRUEBAS:
- Status 200 y Content-Type application/json
- Mirar si se modifican los campos que envie a modificar

# Borrar un producto

- DELETE /api/productos/IDPRODUCTO

Antes del test: 
- Creo un producto

Después del test:
- Borrar el producto

PRUEBAS:
- Probar si la url funciona
- Comprobar si el producto sigue o no en la BD

# Creación de usuario

POST /api/users/register
Body: username, email, password

1. Mirar en api.js si hay que incluirla
2. Crear el controlador de usuarios
3. Crear el fichero de rutas para usuarios
4. Dentro de la ruta creamos el usuario sobre el modelo con el método create