import React from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Reservar } from '../components/Reservar'

export const HomePage = () => {
  return (
    <>
      <Nav />
      <Header />
      <Reservar />
      <Footer />
    </>
  )
}
