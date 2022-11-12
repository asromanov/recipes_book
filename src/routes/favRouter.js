import { Router } from 'express';
import { Recipe } from '../../db/models';


const router = Router();

router.post("/", async (req, res) => {
    const { title, img, url, user_id } = req.body
    await Recipe.findOrCreate({
      where: { title },
      defaults: { title, img, url, user_id},
    })
    console.log(req.body);
    res.redirect('/');
  })
  
router.get('/', async (req, res) => {
    // console.log("locals user " + res.locals.user)
    const myRecipe = await Recipe.findAll({ where: { user_id: res.locals.user.id }, order: [['id', 'DESC']] });
    const initState = { myRecipe };
    res.render('Layout', initState);
  });

  export default router;