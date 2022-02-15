import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import './App.css'

import { Navbar, HomePage, Cryptocurrencies, News, Exchanges, CryptoDetails } from './components'

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrency">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:id">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      {/* <div className="footer">

      </div> */}
    </div>
  )
}

export default App