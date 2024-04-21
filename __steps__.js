/**
 *----------------------------------
 *          MpngoDb Connection
 * ---------------------------------
 * 
 * 1.create an account
 * 2.create an user with password
 * 3.whitelist ip address
 * 4.Database> Connect > Driver > Node > Show all code
 * 5.change the password in the uri
 * -----------------------
 * ---------Server Side-------
 * 1.create --------post
 * 2.app.post('/users', async(req, post) =>{})
 * 3.Make the function async to use await inside it
 * 4.make sure you use express.json() middleware
 * 5.access data from the body: const user = req.body
 * 6.const result = await userCollection.insertOne(user);
 * 7.res.send(result)
 * 
 * 
 * 
 * ----------Client Side-----------
 * 1.create fetch
 * 2.add second parameter as an object
 * 3.Method: "POST"
 * 4.headers: {'content-type': 'application/json'}
 * 5. body: JSON.stringify(user)
 * 
 * 
 * ---------Read Many---------------
 * 1.const cursor = userCollection.find();
 * 2.const result = await cursor.toArray()
 * 
 * 
 * 
 * ----------Delete-----------
 *  ----------server side-------
 * 1.create app.delete('/users/:id', async(req, res) =>{})
 * 2.specify new objectId to delete the right user
 * 3.const query = {_id: new object (id)}
 * 4.const result = await userCollection.deleteOne(query)
 * 5.res.send(result)
 * 
 * ----------client side--------
 * 1.create dynamic url with id
 * 2.mention the Delete method
 * */ 