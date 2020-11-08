const express = require ('express');
const router = express.Router ();
const {
  create,
  categoryById,
  read,
  update,
  remove,
  list,
} = require ('../controller/category');
const {
  signup,
  signin,
  signout,
  requiredSignin,
  isAuth,
  isAdmin,
} = require ('../controller/auth');
const {userById} = require ('../controller/user');
// const {read} = require ('../controller/product');

router.get ('/category/:categoryId', read);
router.get ('/categories', list);

router.post (
  '/category/create/:userId',
  requiredSignin,
  isAuth,
  isAdmin,
  create
);
router.put (
  '/category/:categoryId/:userId',
  requiredSignin,
  isAuth,
  isAdmin,
  update
);
router.delete (
  '/category/categoryId/:userId',
  requiredSignin,
  isAuth,
  isAdmin,
  remove
);
router.param ('userId', userById);
router.param ('categoryId', categoryById);

module.exports = router;
