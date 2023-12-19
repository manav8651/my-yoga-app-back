const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();

const Person = require('./models/Person');
const YogaBatch = require('./models/YogaBatch');
const Enrollment = require('./models/Enrollment');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const completePayment = (fName, email, mobile) => {
    return true;
}


app.post('/api/users', async (req, res) => {
  try {
    const { firstName, lastName, mobileNumber, email, address, age, yogaBatch, enrollmentDate } = req.body;
    const newUser = await Person.create({ firstName, lastName, mobileNumber, email, address, age});
    const newBatch = await YogaBatch.create({batch_name: yogaBatch});

    const newEnrollment = await Enrollment.create({
        enrollmentDate, 
        PersonId: newUser.id,
        YogaBatchId: newBatch.id
    })

    const paymentCompleted = completePayment(newUser.firstName, newUser.email, newUser.mobileNumber);

    if(!paymentCompleted) {
        res.status(500).json({
            status: 'FAILURE',
            paymentCompleted
        })

        return;
    }

    res.status(201).json({
        status: 'SUCCESS',
        paymentCompleted,
        newUser,
        newBatch,
        newEnrollment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
