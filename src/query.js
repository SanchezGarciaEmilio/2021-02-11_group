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
        _id:1,
        discount:{$cond:{
            if: {$gte:["$total_prize",1000]},
            then:true,else:false
        }}
    }}
])

//
db.stationery.aggregate([
    
])
