import React, { CSSProperties } from 'react'
import '../../App.css'
import { templaterow } from '../../models'
import './page.css'
import Header from '../../components/header/header.presenter'

const sidemargin = '20px'
const automargin = 'auto'

export default function pagetemplate(title:string, data: templaterow[]): JSX.Element {
    let templaterows: JSX.Element[] = data.map((item, index) => {
        let rowitem: JSX.Element

        if(index % 2 === 0) {
            let imgstyle: CSSProperties = {
                marginLeft: sidemargin,
				float: 'right'
            }

            let paragraphstyle: CSSProperties = {
                marginLeft: sidemargin,
				float: 'left'
            }
            const image = getimage(item.imagepath, imgstyle)
			rowitem = getparagraph(item.paragraph, paragraphstyle, image)
        }

        else {
            let imgstyle: CSSProperties = {
                marginRight: sidemargin,
				float: 'left'
            }

            let paragraphstyle: CSSProperties = {
                marginLeft: sidemargin,
				float: 'right'
            }
            const image = getimage(item.imagepath, imgstyle)
            rowitem = getparagraph(item.paragraph, paragraphstyle, image)
        }

        return (<div className="page-row" key={index}>
			{rowitem}
        </div>)
    })

    return (                
        <div>
            {Header(title)}
            {templaterows}
        </div>
    )
}

const getimage = (path: string, customstyle: CSSProperties): JSX.Element => (
    <img src={path}
        className="page-paragraph-image"        
        draggable="false"
        style={customstyle} />
)

const getparagraph = (text: string, customstyle: CSSProperties, image: JSX.Element): JSX.Element => (
    <div className="page-paragraph"
        style={customstyle}>
		{image}
        {text}
    </div>
)