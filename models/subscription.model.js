import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, "Subscription name is required"],
        trim:true,
        minlength:3,
        maxlength:100,
    },
    price: {
        type: Number,
        required: [true, "Subscription price is required"],
        min: [0, "Subscription price must be greater than 0"],
    },
    currency: {
        type: String,
        enum: ["USD", "EUR", "GBP", "INR"],
        default: "INR",
    },
    frequency: {
        type: String, 
        enum: ["Monthly", "Yearly"],
        default: "Monthly",
    },
    category: {
        type: String, 
        required:[true, "Subscription category is required"],
        enum: ["Basic", "Standard", "Premium"],
        default: "Basic",
    },
    paymentMethod: {
        type: String, 
        required: true, 
        trim: true, 
        enum: ["Credit Card", "Debit Card", "PayPal", "Stripe", "Apple Pay", "Google Pay"],
    },
    Status: {
        type: String,
        enum: ["Active", "Inactive", "Cancelled"],
        default: "Active",
    },
    startDate: {
        type: Date, 
        required: true,
        validate: {
            validator: (val)=> val <= new Date(),
            message: "Start date cannot be in the past",
        }
    },
    renewalDate: {
        type: Date, 
        required: true,
        validate: {
            validator: function(val){
                return val > this.startDate;
            },
            message: "Renewal date must be after the start date",
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
}, {timestamps:true});

subscriptionSchema.pre('save', function(next){
    if(!this.renewalDate){
        const renewalPeriods = {
            daily:1,
            weekly:7,
            monthly:30,
            yearly:365,
        }
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }
    
    if(this.renewalDate < new Date()){
        this.Status = 'expired';
    }
    next();

});

const subscription = mongoose.model("Subscription", subscriptionSchema);
export default subscription;