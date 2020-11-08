const express = require ('express');
const router = express.Router ();
const {
  signup,
  signin,
  signout,
  requiredSignin,
} = require ('../controller/auth');
const {userSignupValidator} = require ('../validator/index');

router.post ('/signup', userSignupValidator, signup);
router.post ('/signin', signin);
router.get ('/signout', signout);
router.get ('/hello', requiredSignin, (req, res) => {
  res.json ({
    message: 'hellow there',
  });
});

module.exports = router;
