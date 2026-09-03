import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const Tickets = () => {


    let [tickets, setTickets] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/bookings')
            .then((res) => {
                setTickets(res.data)
            })
    }, [])

    
    return (
        <section className="tickets-container">
            {
                tickets.map((item) => {
                    console.log(item)
                    return (
                        <div className="tickets-card">
                            <h2>{item.username}</h2>
                            <h3>Seats: {item.seats}</h3>
                            <button>Cancel Tickets</button>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Tickets