import mongoose from 'mongoose';

const { Schema } = mongoose;

const form2Schema = new Schema({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    universityA: { 
        type: String 
    },
    department: { 
        type: String
    },
    nameOfPhDSupervisor: { 
        type: String
    },
    yearOfJoiningA: { 
        type: String
    },
    dateOfSuccessfulThesisDefence: { 
        type: Date
    },
    dateOfAward: { 
        type: Date,  
    },
    titleOfPhDThesisA: {
        type: String,
    },
    degreeB: {
        type: Array,
    },
    universityB: {
        type: Array,
    },
    branchB: {
        type: Array,
    },
    yearOfJoiningB: {
        type: Array,
    },
    yearOfCompletionB: {
        type: Array,
    },
    durationB: {
        type: Array,
    },
    percentageB: {
        type: Array,
    },
    divisionB: {
        type: Array,
    },
    degreeC: {
        type: Array,
    },
    universityC: {
        type: Array,
    },
    branchC: {
        type: Array,
    },
    yearOfJoiningC: {
        type: Array,
    },
    yearOfCompletionC: {
        type: Array,
    },
    durationC: {
        type: Array,
    },
    percentageC: {
        type: Array,
    },
    divisionC: {
        type: Array,
    },
    school12: {
        type: Array,
    },
    school10: {
        type: Array,
    },
    yearOfPassing12D: {
        type: Array,
    },
    yearOfPassing10D: {
        type: Array,
    },
    percentage12D: {
        type: Array,
    },
    percentage10D: {
        type: Array,
    },
    division12D: {
        type: Array,
    },
    division10D: {
        type: Array,
    },
    degreeE: {
        type: Array,
    },
    universityE: {
        type: Array,
    },
    branchE: {
        type: Array,
    },
    yearOfJoiningE: {
        type: Array,
    },
    yearOfCompletionE: {
        type: Array,
    },
    durationE: {
        type: Array,
    },
    percentageE: {
        type: Array,
    },
    divisionE: {
        type: Array,
    }
});

const form2 = mongoose.model('form2', form2Schema);

export default form2;
