import React from "react"
import servicesview from './services.view'

export class Services extends React.Component {
    public render = () => servicesview()
}

export const servicespath = "/services"