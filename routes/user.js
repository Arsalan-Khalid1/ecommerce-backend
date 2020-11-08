const express = require ('express');
const router = express.Router ();
const {userById, read, update} = require ('../controller/user');
const {requiredSignin, isAdmin, isAuth} = require ('../controller/auth');

router.get ('/secret/:userId', requiredSignin, isAuth, (req, res) => {
  res.json ({
    user: req.profile,
  });
});

router.get ('/user/:userId', requiredSignin, isAuth, read);
router.put ('/user/:userId', requiredSignin, isAuth, update);
router.param ('userId', userById);

module.exports = router;
