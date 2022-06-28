import { ContactContainer, AsideContact, ContactInfo } from './styles'
import { ContactForm } from '../ContactForm'

export const Contact = () => {
  return (
    <ContactContainer id="contact">
      <AsideContact>
        <ContactInfo>
          <h3>
            <span>Get in</span> Touch
          </h3>
          <p>
            Talk to me about cool things. <span>I am open to work</span> in a good companie. Send your message and
            <span> I will contact you soon</span>
          </p>

          <span>Email</span>
          <p>mhaikal1006@gmail.com</p>

          <span>Phone</span>
          <p>+62 831-1446-2202</p>
        </ContactInfo>
      </AsideContact>

      <AsideContact>
        <ContactForm />
      </AsideContact>
    </ContactContainer>
  )
}
