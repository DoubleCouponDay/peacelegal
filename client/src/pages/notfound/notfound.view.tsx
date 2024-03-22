import React from 'react'
import '../../App.css'
import './notfound.css'
import { Link } from 'react-router-dom'
import { homepath } from '../home/home.presenter'

export const Notfound = (): JSX.Element => (
    <div className="font centered-text">
        Page does not exist. Click to go back
        <Link className="button" to={homepath}>Home.</Link>
    </div>
)