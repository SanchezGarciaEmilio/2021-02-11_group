db.stationery.insertMany([
    {
        _id: "101",
        client_name:"Johns-Mueller",
        purchase_date:new Date(2020,02,21),
        product_name:"conforsit",
        category:"chairs",
        unitary_prize:24.5,
        stock:15,
        warehouse:["AB","BA","BB"]
    },

    {_id: "102", client_name:"Considine LLC", purchase_date:new Date(2020,03,11),
     product_name:"bic", category:"pen", unitary_prize:0.2, stock:200,
     warehouse:["AC","BB"]},

     {_id: "103", client_name:"McGlynn Group", purchase_date:new Date(2020,11,31),
     product_name:"office-chair", category:"chairs", unitary_prize:125, stock:20,
     warehouse:["AA","AB","BA"]},

     {_id: "104", client_name:"Breitenberg and Sons", purchase_date:new Date(2020,07,05),
     product_name:"headset", category:"peripherals", unitary_prize:18, stock:30,
     warehouse:["AD"]},

     {_id: "105", client_name:"Thompson-Huel", purchase_date:new Date(2020,10,28),
     product_name:"conforsit", category:"chairs", unitary_prize:39.9, stock:10,
     warehouse:["AB","BA","BB"]},

     {_id: "106", client_name:"Pagac Group", purchase_date:new Date(2020,04,16),
     product_name:"fast-mice", category:"peripherals", unitary_prize:8, stock:45,
     warehouse:["AB","AC","BC","BD"]},

     {_id: "107", client_name:"Gibson-Grady", purchase_date:new Date(2020,08,19),
     product_name:"waterman", category:"pen", unitary_prize:0.8, stock:150,
     warehouse:["AD","BA"]},

     {_id: "108", client_name:"Mante Inc", purchase_date:new Date(2020,12,03),
     product_name:"laptop", category:"computer", unitary_prize:400, stock:5,
     warehouse:["AA","BA"]},

     {_id: "109", client_name:"Kuphal Inc", purchase_date:new Date(2020,01,08),
     product_name:"screen", category:"peripherals", unitary_prize:175, stock:3,
     warehouse:["AC","BB"]},

     {_id: "110", client_name:"Jacobs-Armstrong", purchase_date:new Date(2020,05,26),
     product_name:"chairtory", category:"chairs", unitary_prize:20, stock:20,
     warehouse:["BA"]},

     {_id: "111", client_name:"Mante Inc", purchase_date:new Date(2020,09,21),
     product_name:"fast-mice", category:"peripherals", unitary_prize:8, stock:10,
     warehouse:["AB","AC","BC","BD"]},

     {_id: "112", client_name:"Wehner Group", purchase_date:new Date(2020,08,21),
     product_name:"desktop", category:"computer", unitary_prize:600, stock:5,
     warehouse:["AA"]},

     {_id: "113", client_name:"Morar-McClure", purchase_date:new Date(2020,02,14),
     product_name:"screen", category:"peripherals", unitary_prize:175, stock:11,
     warehouse:["AC","BB"]},

     {_id: "114", client_name:"Trantow and Sons", purchase_date:new Date(2020,05,05),
     product_name:"laptop", category:"computer", unitary_prize:400, stock:1,
     warehouse:["AA","BA"]},

     {_id: "115", client_name:"Doyle, Terry and Luettgen", purchase_date:new Date(2020,12,01),
     product_name:"pad", category:"peripherals", unitary_prize:6.5, stock:25,
     warehouse:["AC","BA"]}
])