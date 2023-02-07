import React from 'react'

const PaginationBtn = (props) => {
    return (
        <div >
            <span>{}</span>
            <p>PREV PAGE</p>
        </div>
    )
}

const Footer = () => {
  return (
    <footer>
        <PaginationBtn type="next" />
        <PaginationBtn type="prev" />
    </footer>

  )
}

export default Footer