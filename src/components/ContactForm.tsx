import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, editContact } from '../redux/contactsSlice'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
`

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`

interface ContactFormProps {
  existingContact?: {
    id: string
    name: string
    email: string
    phone: string
  }
  onEditComplete?: () => void
}

const ContactForm: React.FC<ContactFormProps> = ({
  existingContact,
  onEditComplete
}) => {
  const [name, setName] = useState(existingContact ? existingContact.name : '')
  const [email, setEmail] = useState(
    existingContact ? existingContact.email : ''
  )
  const [phone, setPhone] = useState(
    existingContact ? existingContact.phone : ''
  )
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (existingContact) {
      dispatch(editContact({ id: existingContact.id, name, email, phone }))
      onEditComplete && onEditComplete()
    } else {
      dispatch(addContact({ id: uuidv4(), name, email, phone }))
    }

    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Button type="submit">{existingContact ? 'Editar' : 'Adicionar'}</Button>
    </Form>
  )
}

export default ContactForm
