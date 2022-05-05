db.users.insertOne(
    {
        name: "single",
        accomodates: 2,
        price: 1000,
        description: "A simple room with all the basic necessities",
        rooms_available: 10,
        isAvailable: false
    }
)

db.users.insertMany([
    {
        name: "double",
        accomodates: 3,
        price: 2000,
        description: "A room fit for a small family going on a vacation",
        rooms_available: 5,
        isAvailable: false
    },
    {
        name: "queen",
        accomodates: 4,
        price: 4000,
        description: "A room with a queen sized bed perfect for a simple getaway",
        rooms_available: 15,
        isAvailable: false
    }
])

db.users.find(
    {
        name: "double"
    }
)

db.users.updateOne(
    {
        name: "queen"
    },
    {
        $set: {
            rooms_available: 0
        }
    }
)

db.users.deleteMany(
    {
        rooms_available: 0
    }
)