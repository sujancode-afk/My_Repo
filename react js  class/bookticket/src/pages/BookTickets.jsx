import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const BookTickets = () => {

    let [booking, setBooking] = useState([])
    let { id, type } = useParams();
    let [formData, setFormData] = useState({
        username: "",
        email: "",
        phnum: "",
        seats: ""
    })
    let { username, email, seats, phnum } = formData;
    seats = Number(seats);

    let navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:3000/${type}/${id}`)
            .then((res) => {
                setBooking(res.data)
                console.log(res.data)

            })
    }, [id, type])

    let handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    // let handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('form submitted')
    //     console.log(formData)
    //     axios.post('http://localhost:3000/bookings', formData);
    //     toast.success("Tickests booked successfully")
    //     setTimeout(() => {
    //         navigate('/tickets')
    //     }, [3000])
    // }

    let hanldeSubmit = (e) => {
        e.preventDefault();
        if (booking && seats <= booking.seats) {
            axios.post('http://localhost:3000/bookings', {
                username, phnum, email, seats: Number(seats), refID: booking.id, type, title: booking.title
            }).then(() => {
                axios.patch(`http://localhost:3000/${type}/${booking.id}`, {
                    seats: booking.seats - seats
                })
                    .then((res) => {
                        toast.success("Tickests booked successfully")
                            setTimeout(() => {
                                navigate('/tickets')
                            }, [3000])
                    })
            })
        }
    }

    return (
        <section className="booking-container">
            <ToastContainer />
            <h2>Booking for: {booking.title}</h2>
            <h3>Available Seats: {booking.seats}</h3>

            <form onSubmit={hanldeSubmit}>
                <fieldset>
                    <legend>Boook Tickets</legend>
                    <label htmlFor="username">Username:</label>
                    <input type="text" placeholder='Enter username' id='username' name="username" onChange={handleChange} />
                    <br /><br />
                    <label htmlFor="email">EMail:</label>
                    <input type="email" placeholder='Enter email' id='email' name="email" onChange={handleChange} />
                    <br /><br />
                    <label htmlFor="phnum">Ph number:</label>
                    <input type="tel" minLength={10} max={10} placeholder='Enter ph number' id='phnum' name="phnum" onChange={handleChange} />
                    <br /><br />
                    <label htmlFor="seats">No of Seats:</label>
                    <input type="number" placeholder='Enter no of seats' id='seats' name='seats' onChange={handleChange} />
                    <br /><br />
                    <button>Book Tickets</button>
                    <button>Reset</button>
                </fieldset>
            </form>
        </section>
    )
}

export default BookTickets