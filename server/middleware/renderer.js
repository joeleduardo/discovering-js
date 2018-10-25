import React from 'react';
import Loadable from 'react-loadable';

import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../../src/App';

// import the manifest generated with the create-react-app build
import manifest from '../../build/asset-manifest.json';
// function to extract js assets from the manifest
const extractAssets = (assets, chunks) => Object.keys(assets)
  .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
  .map(k => assets[k]);

const path = require('path');
const fs = require('fs');

export default (store) => (req, res, next) => {

  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
  const context = {};
  const modules = [];


  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }

    // render the app as a string
    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <Loadable.Capture report={m => modules.push(m)}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Loadable.Capture>
      </Provider>
    );

    const reduxState = JSON.stringify(store.getState());

    const extraChunks = extractAssets(manifest, modules)
      .map(c => `<script type="text/javascript" src="/${c}"></script>`);

    // inject the rendered app into our html and send it
    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace('__REDUX_STATE__={}', `__REDUX_STATE__=${reduxState}`)
        .replace('</body>', extraChunks.join('') + '</body>')
    );
  });
}