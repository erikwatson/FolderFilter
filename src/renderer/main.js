const React = require('react')
const DOM = require('react-dom')

const Filter = require('./components/filter/filter.js')

const style = require('./style.sass')

DOM.render(
  <div>
    <Filter />
    <Filter />
    <Filter />
    <Filter />
    <Filter />
  </div>,
  document.getElementById('app-container')
)