import {Component} from 'react'

import {GrImage} from 'react-icons/gr'
import {AiOutlinePlus} from 'react-icons/ai'

import {v4 as uuidv4} from 'uuid'
import Abc from './components/Abc'

import Spin from './components/Spin'

import './App.css'

class App extends Component {
  state = {list: [], input: ''}

  onChangeText = event => {
    this.setState({input: event.target.value})
  }

  onClickButton = event => {
    event.preventDefault()
    const {input} = this.state
    const newInput = {
      id: uuidv4(),
      text: input,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newInput],
      input: '',
    }))
  }

  deleteButton = id => {
    const {list} = this.state
    const newList = list.filter(each => each.id !== id)
    this.setState({list: newList})
  }

  length = () => {
    const {list} = this.state
    const result = list.length
    return result
  }

  showLength = () => {
    const {list} = this.state
    const result = list.length > 0 ? this.length() : null

    return result
  }

  render() {
    const {input, list} = this.state
    return (
      <div className="container">
        <div className="spin-container">
          <Spin list={list} />
        </div>

        <div className="card-container">
          <div className="header-container">
            {list.length > 0 ? (
              <h1 className="head">
                INPUTS <span className="span">{this.showLength()}</span>
              </h1>
            ) : (
              <h1 className="head">INPUTS</h1>
            )}
          </div>
          <div className="input-add-container">
            <form className="input-type-container">
              <input
                type="text"
                placeholder="Input text here..."
                onChange={this.onChangeText}
                className="input"
                value={input}
              />
              <div className="image-container">
                <GrImage size={30} className="image" />
              </div>
            </form>
            <button
              className="button"
              type="submit"
              onClick={this.onClickButton}
            >
              <AiOutlinePlus size={25} />
            </button>
          </div>
          <div>
            <hr className="line" />
          </div>
          <ul className="ul-container">
            {list.map(each => (
              <Abc
                details={each}
                key={each.id}
                deleteButton={this.deleteButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default App
