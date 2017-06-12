import React from 'react'

class HeaderRow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let title = document.getElementsByTagName('title')[0];
    title.innerText = `News of the Day ${(new Date()).toLocaleDateString()}`
  }

  render() {
    return (
      <div id='header-row'>HeaderRow
      </div>
    )
  }
}

export default HeaderRow
