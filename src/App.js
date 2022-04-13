import React from 'react'
import Header from './components/Header'
import Card from './components/shared/Card'

export default function App() {
  const onMenuClick = () => {
    console.log('Menu clicked')
  }
  return (
    <>
    <Header title="Feedback App" onMenuClick={onMenuClick}/>
    <Card>
      <h1>Hello World</h1>
    </Card>
    </>
  )
}
