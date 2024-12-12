
import { Provider } from 'react-redux'
import './App.css'
import Redux_api from './components/Redux_api'
import { store } from './store/Store'

function App() {

  return (
    <>
    <Provider store={store}>
      <Redux_api/>
    </Provider>
    </>
  )
}

export default App
