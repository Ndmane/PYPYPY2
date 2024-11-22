import React from 'react'
export class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key:"all",
                    name:"All"
                },
                {
                    key: "Art Supplies",
                    name: "Art Supplies"
                  },
                  {
                    key: "Paper",
                    name: "Paper"
                  },
                  {
                    key: "Brushes",
                    name: "Brushes"
                  },
                  {
                    key: "Digital Tools",
                    name: "Digital Tools"
                  },
                  {
                    key: "Accessories",
                    name: "Accessories"
                  },
                  {
                    key: "Canvas",
                    name: "Canvas"
                  },
                  {
                    key: "Markers",
                    name: "Markers"
                  },
                  {
                    key: "Pencils",
                    name: "Pencils"
                  },
                  {
                    key: "Books & Guides",
                    name: "Books & Guides"
                  },
                  {
                    key: "Pastels",
                    name: "Pastels"
                  },
                  {
                    key: "Pens",
                    name: "Pens"
                  },
                  {
                    key: "Calligraphy",
                    name: "Calligraphy"
                  },
                
            ]
        }
    }
    render() {
        return(
            <div className = "categories">
                {this.state.categories.map(el => (
                        <div key = {el.id} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }

}

export default Categories