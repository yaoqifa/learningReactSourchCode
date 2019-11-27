import React from 'react'

const { Provider, Consumer } = React.createContext('default')


const twoThemes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#0dc2b3',

  }
}
const ThemeContext = React.createContext(twoThemes.dark)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      themes: twoThemes.light
    }
    this.toggleTheme = () => {
      this.setState(state => ({
        themes: state.themes === twoThemes.dark ? twoThemes.light : twoThemes.dark
      }))
    }
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.themes}>
        <Toolbar changeTheme={this.toggleTheme}/>
      </ThemeContext.Provider>
    )
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemeButton onClick={props.changeTheme}>
        change Theme
      </ThemeButton>
    </div>
  )
}

class ThemeButton extends React.Component {
  // 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。
  // 这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。
  static contextType = ThemeContext
  render() {
    let props = this.props
    let theme = this.context

    return (
      <button
        {...props}
        theme={theme}
        style={{backgroundColor: theme.background}}
      />
    )
  }
}


class Parent extends React.Component {
  state = {
    childContext: '123',
    newContext: '456',
  }

  render() {
    return (
      <>
        <div>
          <label>newContext:</label>
          <input
            type="text"
            value={this.state.newContext}
            onChange={e => this.setState({ newContext: e.target.value })}
          />
        </div>
        <Provider value={this.state.newContext}>{this.props.children}</Provider>
      </>
    )
  }
}

function Child1(props, context) {
  console.log(context)
  return <Consumer>{value => <p>newContext: {value}</p>}</Consumer>
}


export default () => (
  <Parent>
      <Child1 />
      <App />
  </Parent>
)
