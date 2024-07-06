import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import GlobalStyles from './styles/GlobalStyles'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <div>
        <h1>Lista de Contatos</h1>
        <ContactForm />
        <ContactList />
      </div>
    </Provider>
  )
}

export default App
