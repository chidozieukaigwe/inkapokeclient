"use client"
import React from 'react'
import Countdown from 'react-countdown'

export default function OfferCountdown() {
    const endingDate = new Date("2024-12-21")
  return (
    <Countdown date={endingDate} className='font-bold text-5xl text-yellow-300'/>
  )
}
