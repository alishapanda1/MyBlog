var React=require('react');
// var Link = require('react-router').Link;

var Navbar=React.createClass({
  render: function(){
    return(
      <div className="navbar">

      <ul className="nav navbar-nav" id="mynavbar" >
        <li className="active">
        Home</li>
      <li> ALink2
        </li>
        <li> ALink3
          </li>
          <li> ALink4
            </li>
      </ul>
      </div>

    );
  }
});

module.exports=<Navbar />;
