//Agrupa las ventas realizadas en la segunda mitad del año, las agrupa por su categoria y el precio total gastado y las muestra cambiando
//el id por categoria.
db.stationery.aggregate([
    {$match:{$expr:{$gte:[{$month:"$purchase_date"},6]}}},
    {$group:{
        _id: "$category",
        total_prize: {$sum: {$multiply: ["$unitary_prize","$stock"]}},
    }},
    {$project:{
        _id:0,
        category: "$_id",
        total_prize:1,
    }}
])


//Agrupa las ventas por el nombre del cliente (ya que alguno hace más de una compra) y el precio total,
//luego mira si el total gastado supera los 1000 para darle un descuento o no.
db.stationery.aggregate([
    {$group:{
        _id:"$client_name",
        total_prize:{$sum: {$multiply: ["$unitary_prize","$stock"]}}
    }},
    {$project:{
        _id:0,
        client:"$_id",
        discount:{$cond:{
            if: {$gte:["$total_prize",1000]},
            then:true,else:false
        }}
    }},
    {$sort:{
        discount:-1
    }}
])

//Agrupamos por los objetos los productos vendidos en junio y lo agrupamos por el propio
//producto y el almacén en el que se encuentra.
db.stationery.aggregate([
    {$group:{
        _id:"$client_name",
        product:{ "$first": "$product_name" },
        date:{$first:"$purchase_date"},
        total_prize:{$sum: {$multiply: ["$unitary_prize","$stock"]}},
        warehouse:{$first:"$warehouse"},
    }},
    {$match:
        {$expr:{$eq:[{$month:"$date"},6]}}
    },
    {$group:{
        _id:"$product",
        location:{$first:"$warehouse"}
    }}
])
//Debido a que algunos valores del _id del primer group se repiten y no pueden ser sumados
//(como es la fecha) debemos usar un first para tomar solo el primer valor que aparezca al
//agruparlos por cliente.
