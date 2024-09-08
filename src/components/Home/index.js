import {Link} from 'react-router-dom'

import Header from '../Header'

import MeetupContext from '../../context/MeetupContext'

import {
  HomeContainer,
  Name,
  Topic,
  Image,
  HomeTitle,
  HomeCaption,
  RegisterBtn,
} from './styledComponents'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }
  return (
    <MeetupContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        return (
          <>
            <Header />
            {isRegistered ? (
              <HomeContainer>
                <Name>Hello {name}</Name>
                <Topic>Welcome to {topic}</Topic>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <HomeTitle>Welcome to Meetup</HomeTitle>
                <HomeCaption>Please register for the topic</HomeCaption>
                <Link to="/register">
                  <RegisterBtn type="button" onClick={onRegister}>
                    Register
                  </RegisterBtn>
                </Link>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </>
        )
      }}
    </MeetupContext.Consumer>
  )
}
export default Home
