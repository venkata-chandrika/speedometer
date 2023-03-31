// Write your code here
import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBrakes = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 10,
      }))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <p className="speed">Speed is {count}mph</p>
        <p className="text"> Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            type="button"
            className="btn accelerate"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className="btn brake" onClick={this.onBrakes}>
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
