import React from 'react';
import crown from './crown-logo.png';


class BeerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLiked: false,
      details: false
    }
  }
  
  likeButton = () => {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  showDetails = () => {
    this.setState({
      details: !this.state.details
    })
  }

  render() {
    const beersIcon = <img className='beer-icon' src={crown} alt="beers icon"/>

    return (
      <div>
      <img src={this.props.beers.image_url} />
      <div className='card-outline'>
      <h4 className='beer-name'> {this.props.beers.name} </h4>
      <button type="button" class="btn btn-primary" onClick={() => this.showDescription()}>{this.state.description ? "Hide" : "Description"}</button>
      <br></br>
           <p className="card-text">
                {this.state.description ? this.props.beer.description : null}
           </p>
      </div>
           <button id="like-button" onClick={() => this.likeButton()}>{this.state.isLiked ? unlike : like}</button>
           <div>
             {this.state.isLiked ? beersIcon : null}
           </div>
      </div>
    )
  }
}

export default BeerComponent;