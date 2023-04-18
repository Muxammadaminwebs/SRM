import incomes from "../schemas/incomes.schema.js";
// import positions from "../schemas/positions.schema.js";
// import groups from "../schemas/groups.schema.js";

class incomesClass {
  async get(id, query) {
    if (id) return await incomes.findById(id).populate('user_ref_id');
    else return await incomes.find().populate('user_ref_id');
  }
  async post(data) {
    try {
      let {
        _id
      } = await incomes.create(data);
      console.log('data :', data);
      await groups.findByIdAndUpdate(data.group_ref_id, {
        $push: {
          users: _id
        }
      });
      return _id
    } catch (er) {
      return er;
    }
  }
  async put(id, data) {
    return await user.updateOne({
      _id: id
    }, data);
  }
  async delete(id, data) {
    return await user.deleteOne({
      _id: id
    });
  }
}

export default new incomesClass();