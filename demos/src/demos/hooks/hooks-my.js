import React, { useState, useEffect } from 'react'

function MyHooks(props) {
  const [count, setCount] = useState({count: 100, test: 2});

  // 相当于 componentDidMount 和 componentDidUpdate
  // 数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用
  useEffect(() => {
    document.title = `has clicked ${count.count} times`
    console.log(1)
    console.log(props.name)
    return () => {
      console.log(2)
    }
  }, [props.name])

  return (
    <div>
      <p> has clicked {count.test} times</p>
      <button onClick={() => setCount({ count: count.count + 1, test: count.test + 2})}>
        click me
      </button>
    </div>
  )
}

export default MyHooks;