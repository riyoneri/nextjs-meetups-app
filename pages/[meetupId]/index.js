import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetupDetails = props => {
    return <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
    />
}

export const getStaticPaths = () => {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: "m1",
                }
            },
            {
                params: {
                    meetupId: "m2",
                }
            },
            {
                params: {
                    meetupId: "m3",
                }
            }
        ]
    }
}

export const getStaticProps = context => {

    const meetupId = context.params.meetupId

    console.log(meetupId)

    return {
        props: {
            meetupData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
                title: "First meetup",
                address: "Some Street 5, Some city",
                description: "This is a first meetup",
            }
        }
    }
}

export default MeetupDetails