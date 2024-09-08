import React from 'react'

const MeetupContext = React.createContext({
  name: '',
  topic: '',
  isRegistered: false,
  showErrorMsg: false,
  changeName: () => {},
  changeTopic: () => {},
  registerName: () => {},
  updateError: () => {},
})

export default MeetupContext
