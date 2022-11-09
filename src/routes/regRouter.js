import { Router } from 'express';
import { hash, compare } from 'bcrypt';
// import { Entry } from '../db/models';
// import { User } from '../db/models';

const router = Router();

router.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

// router.post('/', async (req, res) => {
//   const { name, email, password } = req.body;
//   if (!(name && password && email)) return res.sendStatus(400);

//   const hashPassword = await hash(password, 5);
//   const [user, isCreated] = await User.findOrCreate({
//     where: { email },
//     defaults: { name, email, password: hashPassword },
//   });

//   if (!isCreated) return res.sendStatus(400);

//   req.session.user = { id: user.id, email: user.email, name: user.name };
//   res.sendStatus(200);
//   console.log(req.body);
// });

router.get('/auth', async (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

// router.post('/auth', async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) return res.sendStatus(400);

//   const user = await User.findOne({ where: { email } });

//   if (!user) return res.sendStatus(400);

//   const isPassValid = compare(password, user.password);

//   if (!isPassValid) return res.sendStatus(400);

//   req.session.user = { id: user.id, email: user.email, name: user.name };

//   res.sendStatus(200);
// });

router.get('/logout', (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.redirect('/');
});

export default router;
