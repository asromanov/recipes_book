import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { Routes } from 'react-router-dom';
import jsxRender from './utils/jsxRender';
import regRouter from './routes/regRouter'
import session from 'express-session';
import store from 'session-file-store';
import isAuth from './middlewares/isAuth';
import User from '../db/models'
import authRouter from './routes/authRouter'
import favRouter from './routes/favRouter'
import { Recipe } from '../db/models'
import user from '../db/models/user';
import Reg from './components/Reg';

const PORT = 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(__dirname + '/public'));

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  store: new FileStore(),
  secret: 'oh klahoma', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});

app.use('/reg', regRouter);
app.use('/auth', authRouter);
app.use('/fav', favRouter)

app.get('/', isAuth, async (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

app.delete('/api/v1/:id', async (req, res) => {
  await Recipe.destroy({ where: { id: req.params.id } });
  res.sendStatus(200)
});


app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
