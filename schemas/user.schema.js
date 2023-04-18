import {
  Schema,
  model,
  Types
} from "mongoose";

const UserSchema = new Schema({
  pos_ref_id: {
    type: Types.ObjectId,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  gender: {
    type: String
  },
  contact: {
    type: String,
    require: true,
    unique: true
  },
  email: {
    type: String
  },
  status: {
    type: String,
    require: true
  },
  group_ref_id: {
    type: Types.ObjectId,
    default: null,
    ref: "groups"
  }
}, {
  timestamps: {
    createdAt: "create_at",
  },
  versionKey: false,
});

export default model("Person", UserSchema);