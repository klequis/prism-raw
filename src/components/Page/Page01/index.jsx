// Page01
import React from 'react'
import { Link } from 'react-router-dom'
import PrismCode from '../PrismCode'

const Page01 = (props) => {
  return (
    <div>
      <Link to='/'>Back</Link>
      <h3>'/page-01'</h3>

      <PrismCode className='language-javascript' component='pre'>
        {`
          const id = [
            {
              name: 'carl'
            },
            {
              name: 'sophie'
            }
          ]

          function some() {
            return x = x + 2

            if (true) {
              if (true) { x = 10 }
              y = 10
            } else {
              y = 7
            }
          }
        `}
      </PrismCode>
    </div>
  )
};

export default Page01
