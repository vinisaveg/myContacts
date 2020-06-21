import React from 'react'

// Components
import Header from './components/Header/Header'
import List from './components/List/List'

import './App.scss'

function App() {

    return (

        <div className="app">
            <Header />    

            <div className="contacts-list">
                <List /> 
            </div> 
        </div>

    )

}

export default App