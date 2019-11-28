/**
 * 必须要react和react-dom 16.7以上
 */

import React, { useState, useEffect } from 'react'

import MyHooks from './hooks-my'

export default () => {
  const [name2, setName2] = useState('jokcy2')

  useEffect(() => {
    console.log('component update')

    return () => {
      console.log('unbind')
    }
  }, [])

  return (
    <>
      <p>My Name is: {name2}</p>
      <input type="text" value={name2} onChange={e => setName2(e.target.value)} />
      <MyHooks name="abc"/>
    </>
  )
}
