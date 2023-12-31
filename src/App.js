import React from "react";
import Header from "./componrnts/Header";
import Footer from "./componrnts/Footer";
import Items from "./componrnts/Items";
import Categories from "./componrnts/Categories";
import ShowFullItem from "./componrnts/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стілець",
          img: "stilec.jpg.webp",
          desc: "lorem ipsum dolor sit amet",
          category: "chairs",
          price: "49.99$",
        },
        {
          id: 2,
          title: "Стіл",
          img: "stil.jpg",
          desc: "lorem ipsum dolor sit amet",
          category: "tables",
          price: "52.92$",
        },
        {
          id: 3,
          title: "Диван",
          img: "dyvan.jpg",
          desc: "lorem ipsum dolor sit amet",
          category: "sofa",
          price: "170.99$",
        },
        {
          id: 4,
          title: "Лампа",
          img: "lampa.jpg",
          desc: "lorem ipsum dolor sit amet",
          category: "lamp",
          price: "78.99$",
        },
        {
          id: 5,
          title: "Дзеркало",
          img: "dzercalo.jpg.webp",
          desc: "lorem ipsum dolor sit amet",
          category: "mirror",
          price: "70.99$",
        },
        {
          id: 6,
          title: "Килим",
          img: "kylym.jpg",
          desc: "lorem ipsum dolor sit amet",
          category: "carpet",
          price: "80.98$",
        },
      ],
      showFullItem: false,
      fullItem: {} 
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem= this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem } items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd ={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem }/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }


    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){

    this.setState({orders: this.state.orders.filter(el => el.id !==id)})
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id)
       isInArray = true;
    });

    if (!isInArray) 
    this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
