import React, { CSSProperties } from "react"
import { Link } from "react-router-dom"
import { homepath } from "../../pages/home/home.presenter"
import { servicespath } from "../../pages/services/services.presenter"
import { providerpath } from "../../pages/fees/fees.presenter"
import { contactpath } from "../../pages/contact/contact.presenter"
import '../../App.css'
import './navigator.css'
import {buttonstate} from "../../models"
import talksymbol from '../../resources/smashicons/006-home-message.svg'
import mailsymbol from '../../resources/smashicons/026-email-5.svg'
import passportsymbol from '../../resources/smashicons/040-profile.svg'

export function navigatorview(
  mousedown: (buttonindex: number) => void, 
  mouseup: () => void,
  homebutton: buttonstate, 
  servicebutton: buttonstate, 
  lspButton: buttonstate,
  contactbutton: buttonstate): JSX.Element {
    return (
      <nav>        
        <div className="divider-container">
          <Link to={homepath} 
            className="nav-item-text nav-title"   
            draggable="false"         
            onMouseDown={() => mousedown(0)}
            onMouseUp={() => mouseup()}>
              Mountain Law
          </Link>
          <div className="divider-line" />
        </div>

        <div className="buttons-container">
          <Link to={servicespath}
            style={getbuttonsstyle(servicebutton, servicespath)}
            className="nav-item"
            draggable="false"      
            onMouseDown={() => mousedown(1)}
            onMouseUp={() => mouseup()}>
              <img className="icon"
              src={talksymbol} /> Services</Link>

          <Link to={providerpath}
            style={getbuttonsstyle(lspButton, providerpath)}
            className="nav-item"  
            draggable="false"                
            onMouseDown={() => mousedown(2)}
            onMouseUp={() => mouseup()}>
              <img className="icon"
              src={passportsymbol} />Fees</Link>

          <Link to={contactpath}
            style={getbuttonsstyle(contactbutton, contactpath)}
            className="nav-item"
            draggable="false"      
            onMouseDown={() => mousedown(3)}
            onMouseUp={() => mouseup()}>
              <img className="icon"
              src={mailsymbol} />Contact</Link>
        </div>
      </nav>
    )
}

export const buttoncount = 4
export const homebuttonindex = 0

const getbuttonsstyle = (state: buttonstate, buttonsroute: string): CSSProperties => {
  let output: CSSProperties = {}

  if(state.supressed === true ||
    window.location.pathname === `${buttonsroute}`) {
    output.boxShadow = suppressedbutton
  }

  else {
    output.boxShadow = ""
  }
  return output
}

const suppressedbutton = "2px 2px 0px rgb(75, 202, 204)" 