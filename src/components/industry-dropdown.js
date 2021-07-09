import React, { useState } from "react";
import 'react-widgets/dist/css/react-widgets.css';
import { DropdownList } from 'react-widgets'

//let { DropdownList } = ReactWidgets

class CreateDropdownList extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      value: "Banking",
      people: ["Banking", "Consumer Goods", "Manufacturing", "Aviation", "Information Technology"],
    }
  }

  handleCreate(name) {
    let { people, value } = this.state;

    let newOption = {
      name,
      id: people.length + 1
    }

    this.setState({
      value: newOption,  // select new option
      people: [...people, newOption] // add new option to our dataset
    })
  }

  render() {
    let { value, people } = this.state;

    return (
      <DropdownList filter
        data={people}
        value={value}
        allowCreate="onFilter"
        onCreate={name => this.handleCreate(name)}
        onChange={value => this.setState({ value })}
        textField="name"
      />
    )
  }
}

export default CreateDropdownList;