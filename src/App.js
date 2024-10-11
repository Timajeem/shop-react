import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items:[
        {
          id: 1,
          category: 'mac',
          imgUrl: 'items/macbook-air.png',
          name: 'MacBook Air',
          display: 13.3, // дюймы
          color: ['Gold', 'Silver', 'Space Grey'],
          price: 999, // доллары
          },
          {
            id: 2,
            category: 'mac',
            imgUrl: 'items/macbook-air.png',
            name: 'MacBook Air',
            display: 13.3, // дюймы
            color: ['Gold', 'Silver', 'Space Grey'],
            price: 1249, // доллары
            },
            {
              id: 3 ,
              category: 'mac',
              imgUrl: 'items/macbook-pro13.png',
              name: 'MacBook Pro 13',
              display: 13.3, // дюймы
              color: [ 'Silver', 'Space Grey'],
              price: 1299, // доллары
              },
              {
                id: 4 ,
                category: 'mac',
                imgUrl: 'items/macbook-pro13.png',
                name: 'MacBook Pro 13',
                display: 13.3, // дюймы
                color: [ 'Silver', 'Space Grey'],
                price: 1499, // доллары
                },
                {
                  id: 5 ,
                  category: 'mac',
                  imgUrl: 'items/macbook-pro16.png',
                  name: 'MacBook Pro 16',
                  display: 16, // дюймы
                  color: [ 'Silver', 'Space Grey'],
                  price: 2399, // доллары
                  },
                  {
                    id: 6 ,
                    category: 'mac',
                    imgUrl: 'items/macbook-pro16.png',
                    name: 'MacBook Pro 16',
                    display: 16, // дюймы
                    color: [ 'Silver', 'Space Grey'],
                    price: 2799, // доллары
                    },
      ]
    }
  }
  render() {
  return (
   <div className="wrapper">
     <Header />
     <Footer/>
   </div>
  )
  }
}

export default App;
