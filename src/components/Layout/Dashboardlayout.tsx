import React from 'react'
import { Outlet } from "react-router-dom"
import { Dashboardhead, Sidebar } from '../Static'
import styled from 'styled-components'

const Dashboardlayout = () => {
  return (
    <Container>
        <Sidebar />
        <Main>
          <Dashboardhead />
          <Outlet />
        </Main>
    </Container>
  )
}

export default Dashboardlayout
const Main = styled.div`
  max-height: 100vh;
  height: 100%;
  width: 100%;
`

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh !important;
  display: flex;
  background-color: #F3F3F3;
  /* flex-direction: column; */
`