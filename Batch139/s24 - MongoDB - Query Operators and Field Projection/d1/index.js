db.users.find(
    {
        age: {$gt: 50}
    }
);

db.users.find(
    {
        age: {$gte: 50}
    }
);

db.users.find(
    {
        age:{$eq: 65}
    }
)

db.users.find(
    {
        age: { $ne: 65}
    }
)

// $in


db.users.find(
    {
        lastName: {
            $in: ["Hawking", "Doe"]
        }
    }
)

db.users.find(
    {
        courses: {
            $in: ["HTML", "React"]
        }
    }
)

// Logical Operators

    //$or

    db.users.find(
        {
            $or: [
                {firstName: "Neil"},
                {age: "25"}
            ]
        }
    )

    db.users.find(
        {
            $or: [{firstname: "Neil"}, {age:{$gte:50}}] 
        }
    )

    db.users.find(
        {
            $and : [
                {age: {$ne:82}}, 
                {age: {$ne:76}},
                {"contact.phone":"123456789"}
            ]
        }
    )

    //How about if we omit $and operator, will it work the same way?
    db.users.find(
        {
            age:{ne:82},
            age: {ne: 76},
            "contact.phone": "123456789"
        },
    )

// Field Projection

        db.users.find(
            {firstname: "Jane"},
            {firstName: 1}
        )
        
        //find dcoument of jane and return only the fields firstname, last name and phone number
        db.users.find(
            {firstName: "Jane"}, {_id: 0, firstName: 1, lastName: 1, "contact.phone": 1}
            )

    // Query operator
            //regex
        db.users.find(
            {
                firstName: { $regex: `N`, $options: `i`}
            }
        );
    
        //Exclusion
        //find document with last name armstrong and return all fields except id number

        db.users.find(
            {lastName: "Armstrong"},
            {_id: 0}
        )

//Mini Activity

        // Find users with letter "S" in their first name and letter "D" in their last name. it must be case insesitive.
        // SHow only the first name and last name fields and hide the _id field

        db.users.find(
            {
                firstName: { $regex: `S`, $options: "i"},
                lastName: { $regex: `D`, $options: "i"}
            },
            {firstname:1, lastName:1, _id:0}
        )