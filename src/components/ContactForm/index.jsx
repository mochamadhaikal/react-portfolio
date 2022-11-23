import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('muhhaykale311096', 'rahma096311', form.current, 'fwvXxyfAZ0AQmnAlo').then(
      () => {
        alert('Success')
      },
      (error) => {
        alert('Failed', error)
      }
    )
    form.current.reset()
  }

  return (
    <form ref={form} onSubmit={sendEmail} autocomplete="off">
      <div>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
      </div>
      <input type="number" name="phone" maxlength="13" placeholder="Phone (without parentheses and spaces)" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  )
}
