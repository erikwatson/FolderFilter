const React = require('react')
const DOM = require('react-dom')

const Filter = require('./components/filter/filter.js')
const Header = require('./components/header/header.js')

const style = require('./style.sass')

DOM.render(
  <div>
    <Header />
    <Filter title="Test" />
    <Filter />
    <Filter />
    <Filter />
    <Filter />
  </div>,
  document.getElementById('app-container')
)