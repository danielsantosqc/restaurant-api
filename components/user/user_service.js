const store = require('./user_store');

function addUser(email, password) {
  return new Promise(async (resolve, reject) => {
    if (!email || !password) {
      console.error('[mensajeDeController] No hay usuario o mensaje');
      return reject(
        'Los datos son incorrectos, email o contraseña incorrectos'
      );
    }
    const fullUser = {
      email: email,
      password: password,
      date: new Date(),
    };
    // console.log("paso por addUser");
    await store.add(fullUser);
    resolve(fullUser);
  });
}

function getUsers() {
  return new Promise(async (resolve, reject) => {
    resolve(await store.list());
  });
}

function updateUser(id, password) {
  return new Promise(async (resolve, reject) => {
    if (!id || !password) {
      console.error('[mensajeDeController] No hay usuario o mensaje');
      return reject(
        'Los datos son incorrectos, email o contraseña incorrectos'
      );
    }
    const result = await store.update(id, password);
    resolve(result);
  });
}

function deleteUser(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      console.error('[mensajeDeController] No hay usuario o mensaje');
      return reject('Los datos son incorrectos.');
    }
    const result = await store.delete(id);
    resolve(result);
  });
}

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
};
