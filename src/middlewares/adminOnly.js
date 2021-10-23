function adminOnly(req, res, next) {
    if (!(req.query.user === 'Ada' || req.query.user === 'Greta' ||
        req.query.user === 'Tim' || req.query.user === 'Vim')
    ) {
        res.send('No tienes los privilegios para ingresar')
    }
    next();
};





module.exports = adminOnly;







var array = ['Ada', 'Greta', 'Vim', 'Tim']
// for (let i = 0; i < array.length; i++) {
//     var element = array[i];
//     console.log(element);
// }
let adminuno = array.map(admin => {
    return admin;
})
console.log(adminuno);
