import React, { CSSProperties } from 'react'
import '../../App.css'
import templaterow from '../../models/templaterow.model'
import './page.css'
import Header from '../../components/header/header.presenter'

const automaticmarginvalue = "auto"

export default function pagetemplate(title:string, data: templaterow[]): JSX.Element {
    let templaterows: JSX.Element[] = data.map((item, index) => {
        let firstrowitem: JSX.Element
        let secondrowitem: JSX.Element

        if(index % 2 === 0) {
            let imgstyle: CSSProperties = {
                marginLeft: automaticmarginvalue
            }

            let paragraphstyle: CSSProperties = {
                marginRight: automaticmarginvalue
            }
            firstrowitem = getparagraph(item.paragraph, paragraphstyle)
            secondrowitem = getimage(item.imagepath, imgstyle)
        }

        else {
            let imgstyle: CSSProperties = {
                marginRight: automaticmarginvalue
            }
            
            let paragraphstyle: CSSProperties = {
                marginLeft: automaticmarginvalue
            }
            firstrowitem = getimage(item.imagepath, imgstyle)
            secondrowitem = getparagraph(item.paragraph, paragraphstyle)
        }

        return (<div className="page-row" key={index}>
            {firstrowitem}
            {secondrowitem}
        </div>)
    })
    return (                
        <div>
            {Header(title)}
            {templaterows}
        </div>
    )
}

const getparagraph = (text: string, customstyle: CSSProperties): JSX.Element => (
    <div className="page-paragraph"
        style={customstyle}>                    
        {text}
    </div>
)

const getimage = (path: string, customstyle: CSSProperties): JSX.Element => (
    <img src={path}
        className="page-paragraph-image"        
        draggable="false"
        style={customstyle} />
)