import React from "react";
import { navigatorview, buttoncount } from "./navigator.view";
import buttonstate from "../../models/buttonstate.model";

export class Navigator extends React.Component<{}, {buttons:buttonstate[]}> {
    public constructor(props: any = null) {        
        super(props)
        let wipstate: buttonstate[] = []

        for(let i = 0; i < buttoncount; i++) {
            wipstate[i] = {
                supressed: false
            }
        }   
        this.state = {buttons: wipstate}
    }

    public componentWillMount = () => document.addEventListener(mouseeventkey, this.onmouseup)

    public componentWillUnmount = () => document.removeEventListener(mouseeventkey, this.onmouseup)

    public render = () => navigatorview(
        this.onmousedown, 
        this.onmouseup, 
        this.state.buttons[0], 
        this.state.buttons[1], 
        this.state.buttons[2], 
        this.state.buttons[3])

    private onmousedown = (buttonrank: number) => {
        this.state.buttons[buttonrank].supressed = true
        this.mutatestate()
    }

    private onmouseup = () => {
        this.state.buttons.forEach((item) => {
            item.supressed = false
        })        
        this.mutatestate()
    }

    private mutatestate = () => {
        let listcopy = Array.from(this.state.buttons)

        let statecopy = {
            buttons: listcopy
        }
        this.setState(statecopy)
    }
}

const mouseeventkey = "mouseup"