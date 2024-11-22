  import React from 'react'
  import './index.css'
  import Header from './Components/Header'
  import Footer from './Components/Footer'
  import Items from './Components/Items'
  import Categories from './Components/Categories'

  class App extends React.Component  {
    constructor(props) { 
      super(props)
      this.state = {
        currentItems: [],
        orders: [],
        items: [

          {
            id: 1,
            title: 'Professional Watercolor Set',
            image: './img/1.jpg',
            desc: 'High-quality watercolor paints in 36 vibrant colors',
            category: 'Art Supplies',
            price: '25.99',
            count: '0'
          },
          {
            id: 2,
            title: 'Sketchbook A4',
            image: './img/2.jpg',
            desc: 'A4 size sketchbook with 120 sheets of acid-free paper',
            category: 'Paper',
            price: '12.50',
            count: '0'
          },
          {
            id: 3,
            title: 'Oil Paint Brushes Set',
            image: './img/3.jpg',
            desc: '10-piece brush set for oil painting, including flat and round tips',
            category: 'Brushes',
            price: '19.99',
            count: '0'
          },
          {
            id: 4,
            title: 'Digital Drawing Tablet',
            image: './img/4.jpg',
            desc: 'Compact digital drawing tablet with pressure sensitivity',
            category: 'Digital Tools',
            price: '89.00',
            count: '0'
          },
          {
            id: 5,
            title: 'Artist Easel',
            image: './img/5.jpg',
            desc: 'Sturdy wooden easel adjustable for different canvas sizes',
            category: 'Accessories',
            price: '45.75',
            count: '0'
          },
          {
            id: 6,
            title: 'Acrylic Paint Set',
            image: './img/6.jpg',
            desc: '24-color acrylic paint set, perfect for canvas and wood',
            category: 'Art Supplies',
            price: '22.30',
            count: '0'
          },
          {
            id: 7,
            title: 'Graphite Pencil Set',
            image: './img/7.jpg',
            desc: '12-piece graphite pencil set ranging from 6B to 4H',
            category: 'Pencils',
            price: '9.95',
            count: '0'
          },
          {
            id: 8,
            title: 'Blending Stumps & Tortillions',
            image: './img/8.jpg',
            desc: 'Set of blending tools for shading and smudging in pencil drawings',
            category: 'Accessories',
            price: '5.49',
            count: '0'
          },
          {
            id: 9,
            title: 'Artist Canvas 5-Pack',
            image: './img/9.jpg',
            desc: '5 pre-stretched canvases, size 12x16 inches',
            category: 'Canvas',
            price: '27.89',
            count: '0'
          },
          {
            id: 10,
            title: 'Alcohol Markers 80 Colors',
            image: './img/10.jpg',
            desc: '80-color set of double-tipped alcohol markers for professional use',
            category: 'Markers',
            price: '69.99',
            count: '0'
          },
          {
            id: 11,
            title: 'Charcoal Drawing Set',
            image: './img/11.jpg',
            desc: 'Charcoal pencils, sticks, and accessories for detailed drawings',
            category: 'Pencils',
            price: '16.25',
            count: '0'
          },
          {
            id: 12,
            title: 'Portable Paint Palette',
            image: './img/12.jpg',
            desc: 'Compact paint palette with 18 wells and a thumb hole',
            category: 'Accessories',
            price: '7.50',
            count: '0'
          },
          {
            id: 13,
            title: 'Color Wheel Guide',
            image: './img/13.jpg',
            desc: 'A handy guide for mixing colors and understanding color theory',
            category: 'Books & Guides',
            price: '4.99',
            count: '0'
          },
          {
            id: 14,
            title: 'Pastel Chalk Set',
            image: './img/14.jpg',
            desc: '48 vibrant soft pastels perfect for drawing and coloring',
            category: 'Pastels',
            price: '18.45',
            count: '0'
          },
          {
            id: 15,
            title: 'Illustration Pens Set',
            image: './img/15.jpg',
            desc: '8-piece set of fine-liner pens with waterproof ink',
            category: 'Pens',
            price: '12.99',
            count: '0'
          },
          {
            id: 16,
            title: 'Light Tracing Pad',
            image: './img/16.jpg',
            desc: 'Ultra-thin light pad for tracing and sketching',
            category: 'Accessories',
            price: '34.80',
            count: '0'
          },
          {
            id: 17,
            title: 'Water Brush Pens Set',
            image: './img/17.jpg',
            desc: 'Set of 6 water brush pens for watercolor painting and blending',
            category: 'Brushes',
            price: '11.25',
            count: '0'
          },
          {
            id: 18,
            title: 'Art Organizer Case',
            image: './img/18.jpg',
            desc: 'Portable organizer case for storing and transporting art supplies',
            category: 'Accessories',
            price: '29.90',
            count: '0'
          },
          {
            id: 19,
            title: 'Beginner’s Drawing Guide',
            image: './img/19.jpg',
            desc: 'Step-by-step guidebook for beginners to improve drawing skills',
            category: 'Books & Guides',
            price: '14.30',
            count: '0'
          },
          {
            id: 20,
            title: 'Calligraphy Set',
            image: './img/20.jpg',
            desc: 'Complete calligraphy set with 3 nibs, ink, and instructions',
            category: 'Calligraphy',
            price: '20.60',
            count: '0'
          }
     
      ]
    }
    this.state.currentItems=this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.incrementCount = this.incrementCount.bind(this)
  }
  render(props)
   {
        return (
      <div className='Wrapper'>
        <Header orders = {this.state.orders} onDelete = {this.deleteOrder} onCount = {this.incrementCount}/>
        <Categories chooseCategory = {this.chooseCategory}/>
        <Items items = {this.state.currentItems} onAdd = {this.addToOrder}/>

        <Footer />

      </div>
    )
  }

  ////////////////////////////////

  incrementCount = (id) => {
    this.setState((prevState) => ({
        items: prevState.orders.map(item => 
            item.id === id ? { ...item, count: item.count + 1 } : item
        )
    }));
}


  ///////////////////////////////

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el =>
      el.id !== id
    )})
  }
  addToOrder(item){
    let arrayId = false
    this.state.orders.map(el => {
      if(el.id === item.id) {
        arrayId = True
      }
    })
    this.setState({orders: [...this.state.orders,item]})
  }
  chooseCategory(category) {
    if (category ==='all') {
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({currentItems:this.state.items.filter(el => el.category === category)})
  }
  componentDidMount() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (orders) {
      this.setState({ orders });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.orders !== this.state.orders) {
      localStorage.setItem('orders', JSON.stringify(this.state.orders));
    }
  }
}
  
    export default App

    