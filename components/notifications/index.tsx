import NotificationTile from "./notification-tile"

const Notifications = () => {

    const notifications = [
        { id: '1', title: 'Test', subtitle: 'New from Bernard Marr in The Future of Work: The top in 5 in demand tech skills for jobs in 2023', timestamp: '17:32', read: false},
        { id: '2', title: 'Test', subtitle: 'New from Bernard Marr in The Future of Work: The top in 5 in demand tech skills for jobs in 2023', timestamp: '17:32', read: false },
        { id: '2', title: 'Test', subtitle: 'New from Bernard Marr in The Future of Work: The top in 5 in demand tech skills for jobs in 2023', timestamp: '17:32', read: false },
        { id: '3', title: 'Test', subtitle: 'New from Bernard Marr in The Future of Work: The top in 5 in demand tech skills for jobs in 2023', timestamp: '17:32', read: false },
        { id: '2', title: 'Test', subtitle: 'New from Bernard Marr in The Future of Work: The top in 5 in demand tech skills for jobs in 2023', timestamp: '17:32', read: true },
        { id: '3', title: 'Test', subtitle: 'New from Bernard Marr in The Future of Work: The top in 5 in demand tech skills for jobs in 2023', timestamp: '17:32', read: true },
        { id: '3', title: 'Test', subtitle: 'New from Bernard Marr in The Future of Work: The top in 5 in demand tech skills for jobs in 2023', timestamp: '17:32', read: true },
        { id: '4', title: 'Test', subtitle: 'New from Bernard Marr in The Future of Work: The top in 5 in demand tech skills for jobs in 2023', timestamp: '17:32', read: true },
    ]

    return (
        <div style={{ height:'100%', width: '100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', paddingTop:20}}>
            <h2>Notifications</h2>
            {notifications.map((notification, index) => <NotificationTile notification={notification} key={index} />)}
        </div>
    )
}

export default Notifications