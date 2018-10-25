import express from 'express';
import Loadable from 'react-loadable';
import serverRenderer from './middleware/renderer';
import store from '../src/redux/store';

const PORT = 3000;
const path = require('path');

const app = express();
const router = express.Router();

router.use('^/$', serverRenderer(store));

// other static resources should just be served as they are
router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' },
));

router.use('*', serverRenderer(store));
app.use(router);

Loadable.preloadAll().then(() => {
  app.listen(PORT, (error) => {
    if (error) {
      return console.log('something bad happened', error);
    }

    console.log("Go to --> http://localhost:" + PORT);
  });
});

