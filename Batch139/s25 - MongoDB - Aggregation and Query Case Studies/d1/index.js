//FIRST STAGE: Search for fruits documents that is currently on sale

db.fruits.aggregate(
    [
        {
            $match: {onSale: true}
        }
    ]
)

//SECOND STAGE: group those documents according to supplier id and get the total value of stock

db.fruits.aggregate(
    [
        {$match: {onSale: true}},
        {$group: {_id: "supplier_id", total: { $sum: "$stock"} }},
    ]
)

//THIRD STAGE: exclude _id field

db.fruits.aggregate(
    [
        {$match: {onSale: true}},
        {$group: {_id: "supplier_id", total: { $sum: "$stock"} }},
        {$project: {_id: 0}}
    ]
)

// FOURTH STAGE: sort the total in ascending order

db.fruits.aggregate(
    [
        {$match: {onSale: true}},
        {$group: {_id: "supplier_id", total: { $sum: "$stock"} }},
        {$project: {_id: 0}},
        {$sort: {total: 1}}
    ]
)