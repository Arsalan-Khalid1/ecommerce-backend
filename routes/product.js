const express = require ('express');
const router = express.Router ();
const {
  create,
  productById,
  read,
  list,
  remove,
  update,
  listRelated,
  listCategories,
  listBySearch,
  photo,
} = require ('../controller/product');
const {requiredSignin, isAuth, isAdmin} = require ('../controller/auth');
const {userById} = require ('../controller/user');

router.get ('/products', list);
router.get ('/products/categories', listCategories);

router.post ('/products/by/search', listBySearch);

router.get ('/products/related/:productId', listRelated);

router.post (
  '/product/create/:userId',
  requiredSignin,
  isAuth,
  isAdmin,
  create
);
router.delete (
  '/product/:productId/:userId',
  requiredSignin,
  isAuth,
  isAdmin,
  remove
);

router.put (
  '/product/:productId/:userId',
  requiredSignin,
  isAuth,
  isAdmin,
  update
);

router.get ('/product/:productId', read);

router.get ('/product/photo/:productId', photo);

router.param ('userId', userById);
router.param ('productId', productById);

module.exports = router;
