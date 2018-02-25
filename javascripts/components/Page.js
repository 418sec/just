import React from 'react';
import Evaluate from './Evaluate';

export default ({ moduleName, script }) => (
  <section
    id="react-root"
    style={{ flex: 5 }}
    className="main-content right-col"
  >
    <div>
      <ul>
        <li>
          <span style={{ fontSize: 20, fontWeight: 'bold' }}>{moduleName}</span>
          <span style={{ fontSize: 14 }}>
            {'\u00a0\u00a0\u00a0'}
            <a
              class="link selected"
              href={`https://github.com/angus-c/just#${moduleName}`}
            >
              API
            </a>
          </span>
          {', '}
          <span style={{ fontSize: 14 }}>
            <a
              class="link selected"
              href={`https://www.npmjs.com/package/${moduleName}`}
            >
              NPM
            </a>
          </span>
          {''}
        </li>
        <li>
          <span style={{ fontFamily: 'consolas' }}>
            {`npm install ${moduleName}`}
          </span>
        </li>
        <li>
          <span style={{ fontFamily: 'consolas' }}>
            {`yarn add ${moduleName}`}
          </span>
        </li>
        <li>
          <Evaluate script={script} />
        </li>
      </ul>
    </div>
  </section>
);
