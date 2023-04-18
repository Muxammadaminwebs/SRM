import {
    Schema,
    model,
    Types
} from "mongoose";
const CenteraSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    close_date: {
        type: String,
        default : null
    },
}, {
    timestamps: {
        createdAt : "open_date"
    },
    versionKey: false,
});
export default model("centera", CenteraSchema);