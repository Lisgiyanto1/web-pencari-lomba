// Controllers
import * as UserController from './user.js';

// Page Controller
export async function index(req, res) {
  res.render('index',
    {
      textA: 'Wilson!',
      textB: 'Lo Siento!',
      textC: 'Lo siento Wilson!',
    }
  );
}