const userModel = require('./model_user');

// search if exist data of _id
// utilizar-------------

async function existData(id) {
  const exist = await userModel.exists({
    _id: id,
  });
  return exist;
}

async function addUsers(user) {
  // list.push(user);
  const myUser = new userModel(user);
  const result = await myUser.save();
  console.log('ok');
  console.log(result);
  console.log('user add success');
}

async function getUsers() {
  const result = await userModel.find();
  console.log(result);
  return result;
}

async function updateUser(id, password) {
  const result = await userModel.findByIdAndUpdate(
    { _id: id },
    { password: password },
    { new: true }
  );
  console.log('user update success', result);
  return result;
}

async function deleteUser(id) {
  const result = await userModel.findByIdAndDelete({ _id: id });

  console.log('delete');
  console.log(result);
  console.log('ok del');

  return result;
}

module.exports = {
  add: addUsers,
  list: getUsers,
  // get
  update: updateUser,
  delete: deleteUser,
};
