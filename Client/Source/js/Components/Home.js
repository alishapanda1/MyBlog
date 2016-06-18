var React=require('react');
var Blog=require('./Blog.js');
var Editor=require('./Editor.js');
var Footer=require('./Footer.js');
var Navbar=require('./Navbar.js');

var Home=React.createClass({
  render: function(){

    return(<div>
      {Navbar}
      {Editor}
      {Blog}
      {Footer}</div>);
  }
});

module.exports=<Home />;
