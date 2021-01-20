import React from 'react';
import Peliculas from '../components/Peliculas';


import {connect} from 'react-redux';
import {fetchPeliculas} from '../action-creators/peliculas'



import 'bootswatch/dist/solar/bootstrap.min.css';
import Navbar from '../components/Navbar';


class PeliculasCont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchMovie:'batman'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount (){
      this.state.SearchMovie
  }
 
  handleChange (evt) {
    const value = evt.target.value; 
    this.setState({
      SearchMovie: value    
});}

  handleSubmit(evt){
    evt.preventDefault();  
   this.props.fetchPeliculas(this.state.SearchMovie)
 }

  render() {    
    return (
          
      <div className='container'>    
         <Navbar 
         handleSubmit={this.handleSubmit} 
         handleChange={this.handleChange} 
         user={this.props.users} 
         logout={this.props.fetchOutUser}/>     
         <div className="row pt-2">   
        {this.props.movies && this.props.movies.map((movie, i) => (  
                
          <Peliculas movie={movie} key={i}></Peliculas>     
        ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
      movies: state.peliculas.peliculas.Search,
      users: state.users.user
  }}


const mapDispatchToProps = function(dispatch) {
    return {
              fetchPeliculas:(title)=> dispatch(fetchPeliculas(title)),
              fetchOutUser:()=> dispatch(fetchOutUser())
  }}
export default connect(mapStateToProps,mapDispatchToProps)(PeliculasCont);
