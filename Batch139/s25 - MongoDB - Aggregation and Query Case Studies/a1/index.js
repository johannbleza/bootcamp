//2
db.fruits.aggregate(
    [
        {$match: {onSale: true}},
        {$count: "fruitsOnSale"}
    ]
)

//3
db.fruits.aggregate(
    [
        {$match: {stock: {$gte: 20}}},
        {$count: "enoughStock"}
    ]
)

//4
db.fruits.aggregate(
    [
        {$match: {onSale: true}},
        {$group: {_id: "$supplier_id", avg_price: {$avg: "$price"}}}
    ]
)

//5
db.fruits.aggregate(
    [
        {$match: {onSale: true}},
        {$group: {_id: "$supplier_id", max_price: {$max: "$price"}}}
    ]
)

//6
db.fruits.aggregate(
    [
        {$match: {onSale: true}},
        {$group: {_id: "$supplier_id", min_price: {$min: "$price"}}}
    ]
)