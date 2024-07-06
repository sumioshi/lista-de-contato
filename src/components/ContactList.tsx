/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { removeContact } from '../redux/contactsSlice'
import styled from 'styled-components'
import ContactForm from './ContactForm'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`

const Button = styled.button`
  margin-left: 10px;
  padding: 5px;
  background-color: #ff0000;
  color: white;
  border: none;
  cursor: pointer;
`

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts)
  const dispatch = useDispatch()

  return (
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          <div>
            <div>{contact.name}</div>
            <div>{contact.email}</div>
            <div>{contact.phone}</div>
          </div>
          <div>
            <ContactForm existingContact={contact} onEditComplete={() => {}} />
            <Button onClick={() => dispatch(removeContact(contact.id))}>
              Remover
            </Button>
          </div>
        </ListItem>
      ))}
    </List>
  )
}

export default ContactList
