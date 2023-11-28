// Controllers
import * as UserController from './user.js';

// Page Controller
export async function index(req, res) {
  res.render('index', {
    textA: 'Welcome in WebL, ',
    textB: 'Find the race you want and join the TEAM of Choice',
    textC: 'The race finder website',
  });
}
