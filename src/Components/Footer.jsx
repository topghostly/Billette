import React from 'react'
import styled from 'styled-components'
function Footer() {
  return(
    <FooterBody>
        <div className="container-sm">
            <div className="row">
                <div className="col-md-4">Thsi</div>
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
            </div>
        </div>
    </FooterBody>
  )
}
const FooterBody = styled.div`
position: relative;
    min-height: 100vh;
    bottom: 0px;
    background-color: aquamarine;
`
export default Footer