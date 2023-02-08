import NewMeetup from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {

    const addMeetupHandler = enteredMeetupData => {
        console.log(enteredMeetupData)
    }

    return <NewMeetup onAddMeetup={addMeetupHandler}  />
}

export default NewMeetupPage