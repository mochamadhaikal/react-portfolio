import { BoxFeedback } from './styles'
import { AiFillEdit } from 'react-icons/ai'

export const SendFeedback = () => {
  return (
    <BoxFeedback
      href="https://api.whatsapp.com/send?phone=6283114462202&text=Hello%20Haikal,%20I%20have%20some%20recommendations%20to%20improve%20your%20portfolio"
      target="_blank"
    >
      Send Feedback
      <AiFillEdit size="20" />
    </BoxFeedback>
  )
}
