const express=require('express');
const router=express.Router();
const bodyParser = require('body-parser');
const Person = require('./../moduls/person');

//router.use(bodyParser.json());

// Root route
router.get('/', (req, res) => {
    res.send("Welcome to my Hotel. How can I help you......?");
});

// Route to create a new person
router.post('/', async (req, res) => {
    try {
        const data = req.body; // Assuming the request body contains the person data

        // Create a new person document using the MongoDB model
        const newPerson = new Person(data);

        // Save the new person to the database
        const response = await newPerson.save();
        console.log('Data saved:', response);

        res.status(201).json(response); // Use status 201 for resource creation
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

// Route to fetch all persons
router.get('/', async (req, res) => {
    try {
        // Fetch all person records
        const data = await Person.find();
        console.log('Data fetched:', data);

        res.status(200).json(data); // Send the fetched data as the response
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});


router.get('/:workType',async(req,res)=>{
    try {
        const workType=req.params.workType ;
        if(workType=='chef' || workType=='manager' || workType=='waiter'){
            const response=await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response); 

        }
        else{
            res.status(404).json({error: 'Invalid work type'});
        }
        
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
        
    }
})

module.exports=router;