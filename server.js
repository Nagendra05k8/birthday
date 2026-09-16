import express from 'express';
import cookieSession from 'cookie-session';
import path from 'path';
import { fileURLToPath } from 'url';
import { checkBirthdayDetails } from './auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session management
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_SECRET || 'birthday-surprise-secret-key'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// Static assets
app.use('/static', express.static(path.join(__dirname, 'static')));

// Routes
app.get('/', (req, res) => {
  res.render('login', { error: null });
});

app.post('/surprise', (req, res) => {
  const rollNo = (req.body.roll_no || '').trim();
  const birthday = (req.body.birthday || '').trim();

  if (checkBirthdayDetails(rollNo, birthday)) {
    req.session.verified = true;
    return res.redirect('/birthday');
  }

  return res.render('login', {
    error: "Oops! Those details don't match 😄"
  });
});

app.get('/surprise', (req, res) => {
  res.redirect('/');
});

app.get('/birthday', (req, res) => {
  if (!req.session || !req.session.verified) {
    return res.redirect('/');
  }

  return res.render('birthday');
});

app.get('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
