import Header from "./Header"
import Card from "./Card"
import cars from "../src/ProductData/Products"
import './main.css'

function App() {

  return (
    <div>
      <Header />
      <div className="main-card-div">
        {
          cars.map((item, index) => {
            return <Card name={item.name} price={item.price} image={item.image} key={index}/>
          })
        }
      </div>
    </div>
  )
}

export default App
