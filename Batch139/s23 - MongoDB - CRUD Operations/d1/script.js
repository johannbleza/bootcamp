// CRUD Operations

//Create
    //insert single document
    db.collection.insertOne({document})

    db.users.insertOne(
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 21,
        contact: {
            phone: "87654321",
            email: "janedoe@mail.com"
        },
        coursers: ["CSS", "JavasScript", "Python"]
    }
);
    //insert multiple documents/ array of documents

    db.collection.insertMany([{document},{document} ])

    db.users.insertMany([
        {
            firstName: "Stephen",
        lastName: "Hawking",
        age: 76,
        contact: {
            phone: "87654321",
            email: "stephenhawking@mail.com"
        },
        courses: ["Phython", "React", "PHP"],
        department: "none"
        },
        {
            firstName: "Neil",
            lastName: "Armstrong",
            age: 82,
            contact: {
                phone: "87654321",
                email: "janedoe@mail.com"
            },
            courses: ["CSS", "JavasScript", "Python"]
        }
    ])

    //Read
        db.collection.find()

        db.users.find();
            //returns all documents

        db.users.find({firstName: "Stephen"})

        db.users.find({
            firstname:"Armstrong",
            age: 82
        })

//Update
        
    db.collection.updateOne()
    db.collection.updateMany()

    db.users.insertOne(
        {
            firstName: "Test",
            lastName: "Test",
            age: 0,
            contact: {
                phone: "0000",
                email: "test@mail.com"
            },
            coursers: [],
            department: "none"
        }
    );

    //update a single document
    db.users.updateOne({query}, {update})

    db.users.updateOne(
        {
            firstName: "Test"
        },
        {
            $set: {
                firstName: "Bill",
                lastName: "Gates",
                age: 65,
                contact: {
                    phone: "123456789",
                    email: "bill@gmail.com"
                },
                coursers: ["PHP", "Laravel", "HTML"],
                department: "Operations",
                status: "active"
            }
        }
    )

    db.users.updateOne(
        {firstName: "Jane"},
        {
         $set: {department: "none"}
        })


    //update multiple documents at once
    db.users.updateMany(
        {
            department: "none"
        },
        {
            $set: {
                department: "HR"
            }
        }
    )

    db.users.insertOne(
        {
            firstName: "Test",
            lastName: "Test",
            age: 0,
            contact: {
                phone: "0000",
                email: "test@mail.com"
            },
            coursers: [],
            department: "none"
        }
    );

    //replacing the whole document if necessary

    db.users.replaceOne(
        {
            firstName: "Test"
        },
        {
            firstName: "Billy",
            lastName: "Crawford",
            age: 35,
            contact: {
                phone: "123456789",
                email: "billycrawford@mail.com"
            },
            coursers: ["React", "Node", "Express"],
            department: "Finace" 
        }
    )

    db.users.updateOne(
        {
            firstname: "Bill"
        },
        {
            $unset: {
                status: "active"
            }
        }
    )

//Delete
    //delete a single document
        db.users.deleteOne();

        db.users.deleteOne({firstname: "Test"});

    
        //delete multiple documents
        db.users.deleteMany({department:"HR"})

        //Q: How to add back deleted documents
            

// Advance Queries

    //Mini Activity
        //retrieve documents that has phone number 87654321

    //Query on nested fields
    db.users.find{
        {
            contact.phone: "87654321"
        }
    }

    //Query an embedded document
    db.users.find(
        {
            contact: {
                phone: "87654321",
                email: "stephenhawking@mail.com"
            }
        }
    )

   //Query an Array with Exact Elements
   //css, javascript, python
   db.users.find(
       {
           courses: [ "CSS", "JavaScript", "Python"]
       }
   );

   //Querying an Array without regard to order
   react, python - $all

   db.users.find(
       {
           courses: {$all: ["Python", "React"]}
       }
   )