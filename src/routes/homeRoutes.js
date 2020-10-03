module.exports = function(app) {

var homeController = require('../controllers/homeController');
var userController = require('../controllers/userController');



app.route('/api/Signup')
  .post(userController.signup);

app.route('/api/Login')
  .post(userController.login);

app.use(homeController.show_index);
};
