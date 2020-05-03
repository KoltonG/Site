/** Imports */
import React from 'react'
import { Helmet } from 'react-helmet'
import background from '../images/background.png'

/** Component */
export default () => (
  <>
    {/* Meta */}
    <Helmet>
      <title>Kolton</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    {/* Page Content */}
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          width: '7vh',
          wordBreak: 'break-all',
          fontSize: '13vh',
        }}
      >
        Kolton
      </h1>
    </div>
  </>
)
