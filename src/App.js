import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import Register from './components/Register'

import NotFound from './components/NotFound'

import MeetupContext from './context/MeetupContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: topicsList[0].displayText,
    isRegistered: false,
    showErrorMsg: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = displayText => {
    this.setState({topic: displayText})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({showErrorMsg: true})
  }

  render() {
    const {name, topic, isRegistered, showErrorMsg} = this.state
    return (
      <MeetupContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          showErrorMsg,
          registerName: this.registerName,
          updateError: this.updateError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <NotFound />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}
export default App
