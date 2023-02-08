import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        title: 'A first Meetup',
        description: "This is a first meetup"
    },
    {
        id: 'm2',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        title: 'A second Meetup',
        description: "This is a second meetup"
    },
    {
        id: 'm3',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        title: 'A third Meetup',
        description: "This is a third meetup"
    },
]

const HomePage = () => {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;