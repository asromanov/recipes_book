import { Router } from 'express';
import { hash, compare } from 'bcrypt';
// import { Entry } from '../db/models';
import { User } from '../../db/models';

const router = Router();

router.get('/', async (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  });
  
  router.post('/', async (req, res) => {
    const { login, password } = req.body;
    if (!login || !password) return res.sendStatus(400);
  
    const user = await User.findOne({ where: { login } });
    // console.log(user)
  
    if (!user) return res.sendStatus(400);
  
    const isPassValid = compare(password, user.password);
  
    if (!isPassValid) return res.sendStatus(400);
  
    req.session.user = { id: user.id, email: user.email, login: user.login };
  
    res.sendStatus(200);
  });

  export default router;