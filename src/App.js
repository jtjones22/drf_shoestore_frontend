import React from 'react';

const url = "http://127.0.0.1:8000/api/shoe/?format=json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: []
    }
  }
  componentDidMount() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({shoes: data})
      console.log(data)
    })
  }
  render() {
    const { shoes = [] } = this.state
    return (
      <div>
        <h3>Homepage</h3>
        {shoes.map(shoe => (
          <ul>
            <li>
              Size: {shoe.size}
            </li>
            <li>
              Brand: {shoe.brand}
            </li>
            <li>
              Manufacturer: {shoe.manufacturer}
            </li>
            <li>
              Color: {shoe.color}
            </li>
            <li>
              Material: {shoe.material}
            </li>
            <li>
              Shoe Type: {shoe.shoe_type}
            </li>
            <li>
              Fasten Type: {shoe.fasten_type}
            </li>
          </ul>
        ))}
      </div>
    );
  }
  }

export default App;
