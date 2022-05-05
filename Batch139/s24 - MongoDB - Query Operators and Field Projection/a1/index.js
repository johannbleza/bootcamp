db.users.find(
    {
        $or: [
            {firstName: { $regex: "S", $options: "i"}},
            {lastName: { $regex: "D", $options: "i"}}
        ]
    },
    {_id:0, firstName: 1, lastName: 1}
)

db.users.find(
    {
        $and: [
            {department: "HR"},
            {age: {$gte: 70}}
        ]
    }
)

db.users.find(
    {
        $and: [
            {firstName: {$regex: "e", $options: "i"}},
            {age: {$lte: 30}}
        ]
    }
)