import React from 'react'
import ItemsList from '../ItemsList/index'
import CommentList from"../CommentsList/index"

import './App.css'

const App = () =>
    <main>
        <aside>
            <h1>DAIRY APP</h1>
            <p>Comment with no sense</p>
        </aside>
        <article>
            <ItemsList/>
            <CommentList/>
        </article>

    </main>

export default App;