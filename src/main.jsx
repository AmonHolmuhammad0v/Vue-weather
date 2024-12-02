import { createRoot } from 'react-dom/client'
import './assets/css/style.scss'
import { store } from './store/index.js'
import { Provider } from 'react-redux'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>        
    </Provider>

)
