# Ejercicio Group

En este ejercicio usaremos una base de datos sobre las ventas de una empresa a distintos clientes.


### Archivos

En la carpeta de *[source](https://github.com/SanchezGarciaEmilio/2021-02-11_group/tree/main/src)* incluimos los datos, concretamente en el fichero *[data](https://github.com/SanchezGarciaEmilio/2021-02-11_group/blob/main/src/data.js)*.
En él hemos incluido distintos campos; `_id` para identificar cada venta, `client_name` para identificar cada cliente, `purchase_date` donde incluimos la fecha en la que se realizó la compra, `product_name` donde inlcuimos el nombre del producto que se vende (pudiendo repetirse), `category` donde añadimos una categoria a cada producto, `unitary_prize` con el precio de cada producto individualmente, `stock` con el número de ventas a ese cliente y `warehouse` donde vienen el almacén o almacenes donde se encuentran los productos.

En la carpeta de *[documentation](https://github.com/SanchezGarciaEmilio/2021-02-11_group/tree/main/doc)* encontramos las nociones teóricas necesarias para realizar este proyecto, en el archivo de *[Teoria](https://github.com/SanchezGarciaEmilio/2021-02-11_group/blob/main/doc/Teoria.pdf)*.


### Búsquedas

En la misma carpeta de *source* tenemos las búsquedas hechas en el archivo de *[query](https://github.com/SanchezGarciaEmilio/2021-02-11_group/blob/main/src/query.js)*.
En el *query* haremos las búsquedas en la base de datos con el `aggregation()`, haciendo un uso especial del operador de estado `$group`.


> Emilio Sánchez García