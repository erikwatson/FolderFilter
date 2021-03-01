const React = require('react')
const style = require('./style.sass')

module.exports = ({ title }) => {
  return <div className='filter'>
    <h1>{title || 'Filter Title'}</h1>
    <div className='drawer open'>
      <p>Some text in here to test with</p>
    </div>
  </div>
}