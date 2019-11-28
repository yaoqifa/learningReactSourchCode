import React from 'react'

function ChildrenDemo(props) {
  // console.log(props.children)
  console.log(React.Children.forEach(props.children, c => [c, [c, c, [c, c, c]]]))
  console.log(React.Children.count(props.children));
  console.log(React.Children.toArray(props.children))
  return props.children
}

export default () => (
  <ChildrenDemo>
    <span>1</span>
    <span>2</span>
    <div>
      <span>3</span>
      <span>4</span>
    </div>
  </ChildrenDemo>
)
