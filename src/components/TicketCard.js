import { Link } from 'react-router-dom'
import AvatarDisplay from "./AvatarDisplay"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"
import DeleteBlock from "./DeleteBlock"

const TicketCard = ({color, ticket}) => {
  return (
    <div className="ticket-card">
        <Link to="/ticket/${ticket.documentId}" id="link">
          <div className="ticket-color" style={{background: color}}></div>
            <h3>{ticket.title}</h3>
            <AvatarDisplay ticket={ ticket } />
            <StatusDisplay status={ticket.status}/>
            <PriorityDisplay priority={ticket.priority}/>
            <ProgressDisplay progress={ticket.progress}/>
        </Link>
        <DeleteBlock />
    </div >
      // </div>
  )
}

export default TicketCard