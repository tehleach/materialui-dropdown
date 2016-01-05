import React from 'react'
import DropDownMenu from 'material-ui/lib/DropDownMenu'
import MenuItem from 'material-ui/lib/menus/menu-item'

export default class Main extends React.Component {
  render() {
    const items = []
    for (let i = 0; i < 400; i++ ) {
      items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`}/>)
    }
    return <div>
        <DropDownMenu>
          { items }
        </DropDownMenu>
      </div>
  }
}
