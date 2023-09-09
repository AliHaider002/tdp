"use client"
import Header from '@/Components/Header/Header'
import Layout from '@/Components/Layout'
import Details from '@/pages/Projects/Details/Details'
import Drawer from '@/pages/Projects/Details/Modal/Modal'
import React, { useState } from 'react'

const page = () => {
  return (
    <>
    <Layout>
    <div>
      </div>
        <Header 
        name='New Analytics Dashboard'
        desc='Hello Ahmed, you have in total 20 tasks under this project!'
        coloredText='20 tasks'
        backButton={true}
        />
        <Details />
    </Layout>
    </>
  )
}

export default page