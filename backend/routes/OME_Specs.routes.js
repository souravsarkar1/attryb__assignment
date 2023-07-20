const express = require('express');
const { OEMSpecsModel } = require('../models/OEM_Specs .model');
const { auth } = require('../middleware/auth.crud.middleware');

const moeSpecsRoutes = express.Router();


moeSpecsRoutes.get('/', async (req, res) => {
    try {
        const data = await OEMSpecsModel.find();
        return res.status(200).json({ data });
    } catch (error) {
        return res.status(400).json({ msg: "Somethings went to wrong" });
    }
})
moeSpecsRoutes.get("/data",auth ,async (req, res) => {
    try {
        const data = await OEMSpecsModel.find({ userID: req.body.userID });
        return res.json({ data });
    } catch (error) {
        return res.status(400).json({ msg: "Something went wrong" });
    }
});

moeSpecsRoutes.post('/add', auth, async (req, res) => {
    try {
        const { model_name, year_of_model, list_price, available_colors, mileage, power_bhp, max_speed, img } = req.body;
        if (!model_name || !year_of_model || !list_price || !available_colors || !mileage || !power_bhp || !max_speed || !img) {
            return res.status(400).json({ msg: "Please fill all the required fields" });
        }
        const newData = new OEMSpecsModel(req.body);
        await newData.save();
        const carID = newData._id;
        res.cookie('carID', carID, { httpOnly: true });
        res.status(200).json({ msg: "new note is Added", newData });
    } catch (error) {
       // console.log(error);
        return res.status(400).json({ msg: "Some Thing Went to Wring" });
    }
}



)


moeSpecsRoutes.delete("/delete/:carID", auth, async (req, res) => {
    const { carID } = req.params;
    const userIDinUserDoc = req.body.userID; // Not needed, should be extracted from auth middleware

    try {
        const note = await OEMSpecsModel.findById(carID);
        if (!note) {
            return res.status(404).json({ msg: "Note not found" });
        }

        const userIDinNoteDoc = note.userID;
        if (userIDinUserDoc === userIDinNoteDoc) {
            // If the user owns the note, delete it
            await OEMSpecsModel.findByIdAndDelete(carID);
            return res.json({ msg: `${note.model_name} has been deleted` });
        } else {
            return res.status(403).json({ msg: "Not Authorized" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
moeSpecsRoutes.put('/update/:carID', auth, async (req, res) => {
    // logic
    const userIDinUserDoc = req.body.userID;
    const { carID } = req.params;
    const note = await OEMSpecsModel.findOne({ _id: carID });
    const userIDinNoteDoc = note.userID;
    try {
        if (userIDinUserDoc === userIDinNoteDoc) {
            // update
            await OEMSpecsModel.findByIdAndUpdate({ _id: carID }, req.body);
            res.json({ msg: `${note.model_name} has been updated` })
        }
        else {
            res.json({ msg: "Not Authorized" });
        }
    } catch (error) {
        res.json({ error: error.message });
    }

})

module.exports = { moeSpecsRoutes };