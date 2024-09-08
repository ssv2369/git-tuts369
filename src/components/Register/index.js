import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'

import {
  RegisterContainer,
  RegisterImageContainer,
  RegisterImage,
  RegisterForm,
  FormTitle,
  InputContainer,
  InputElement,
  Label,
  SelectElement,
  OptionElement,
  RegisterBtn,
  ErrorMsg,
} from './styledComponents'

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

const Register = props => (
  <MeetupContext.Consumer>
    {value => {
      const {
        name,
        topic,
        showErrorMsg,
        changeTopic,
        changeName,
        registerName,
        updateError,
      } = value

      const onSubmitRegistrationForm = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <>
          <Header />
          <RegisterContainer>
            <RegisterImageContainer>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
            </RegisterImageContainer>
            <RegisterForm onSubmit={onSubmitRegistrationForm}>
              <FormTitle>Let us join</FormTitle>
              <InputContainer>
                <Label htmlFor="name">Name</Label>
                <InputElement
                  id="name"
                  type="text"
                  value={name}
                  placeholder="Your name"
                  onChange={onChangeName}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="topic">Topics</Label>
                <SelectElement
                  id="topic"
                  value={topic}
                  onChange={onChangeTopic}
                >
                  {topicsList.map(eachTopic => (
                    <OptionElement value={eachTopic.id} key={eachTopic.id}>
                      {eachTopic.displayText}
                    </OptionElement>
                  ))}
                </SelectElement>
              </InputContainer>
              <RegisterBtn type="submit">Register Now</RegisterBtn>
              {showErrorMsg && <ErrorMsg>Please enter your name</ErrorMsg>}
            </RegisterForm>
          </RegisterContainer>
        </>
      )
    }}
  </MeetupContext.Consumer>
)

export default Register
