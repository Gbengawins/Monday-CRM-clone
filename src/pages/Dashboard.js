import React, { useState, useEffect } from 'react'
import TicketCard from '../components/TicketCard'



const Dashboard = () => {
  const [ tickets, setTickets ] = useState(null)
  // const { categories, setCategories } = useContext(categoriesContext)

  const ticket = [
    {
      category: "Q1 2023",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Victory Alee",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
      status: "done",
      priority: 5,
      progress: 40,
      description: "Make a video showcasing NFT Safety...",
      timestamp: "2023-02-11T13:14:14+0000",
    },
    {
      category: "Q1 2023",
      color: "blue",
      title: "AI 101 Video",
      owner: "Gbengus Michael",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200",
      status: "done",
      priority: 4,
      progress: 60,
      description: "Make a video showcasing AI...",
      timestamp: "2023-02-11T13:14:14+0000",
    },
    {
      category: "Q2 2023",
      color: "blue",
      title: "Build a bot",
      owner: "Gbengus Michael",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200",
      status: "done",
      priority: 3,
      progress: 10,
      description: "Make a video showcasing Bot...",
      timestamp: "2023-02-11T13:14:14+0000",
    },
  ];

  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(186,255,201)",
    "rgb(186,225,255)",
  ];
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category}) => category))
  ]

  console.log(uniqueCategories)
  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard