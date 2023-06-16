import React, { Component } from 'react'

export class Categories extends Component {

    constructor(props){
        super(props)
        this.state = {
            categories:[
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'chairs',
                    name: 'Стільці'
                },
                {
                    key: 'tables',
                    name: 'Столи'
                },
                {
                    key: 'lamp',
                    name: 'Лампи'
                },
                {
                    key: 'mirror',
                    name: 'Дзеркала'
                },
                {
                    key: 'carpet',
                    name: 'Килими'
                },

            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={()=> this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories