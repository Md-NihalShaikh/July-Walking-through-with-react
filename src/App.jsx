import Header from "./Components/Header"
import Person from "./Components/person"
import List from "./Components/List"
import Button from "./Components/Button"

function App() {

  return (
    <>
      <Header title="Welcome to my website!" />
      <Person name="Johnny" age="20" />
      <List items={['appy', 'coke', 'miranda']} />
      <Button text="Click me!" onClick={() => console.log("Button clicked")} />


    </>
  )
}

export default App
