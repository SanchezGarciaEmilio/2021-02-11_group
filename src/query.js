db.stationery.aggregate([
    {$match:{
        purchase_date:{$gte: new Date(2020,06,01)}
    }},
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

db.stationery.aggregate([
    
])
