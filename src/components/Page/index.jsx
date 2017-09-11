// Page
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Page01 from './Page01'
import Page02 from './Page02'
import styles from './style.css'
import PrismCode from './PrismCode'
// import Prism from 'prismjs'

const Page = () => {
  // var code = "var data = 1;";
  // console.log(Prism.languages.javascript)
  // var html = Prism.highlight(code, Prism.languages.javascript)


  return (
    <Router>
      <div>
        <Route path='/page-01' component={Page01} />
        <Route path='/page-02' component={Page02} />
        <Route exact path='/' render={() => (
          <div>
            <h3>Home '/'</h3>
            <div className={styles.space}></div>
            <ul>
              <li><Link to='page-01'>Page 1</Link></li>
              <li><Link to='page-02'>Page 2</Link></li>
            </ul>
            {/* <code>
              {html}
            </code> */}
            <PrismCode className='language-javascript' component='pre'>
              {`
                const id = x => x
                function some() {
                  return x = x + 2
                  if (true) {
                    y = 10
                  } else {
                    y = 7
                  }
                }
              `}
            </PrismCode>
          </div>
        )} />

      </div>
    </Router>
  )
}

export default Page
