import Person from "./components/person"


function App(){

  return(
    <>
      <Person firstname = {'Jane'} lastname = {'Doe'} age = {'45'} haircolor = {'Black'}/>
      <Person firstname = {'John'} lastname = {'Smith'} age = {'88'} haircolor = {'Brown'}/>
      <Person firstname = {'Millard'} lastname = {'Fillmore'} age = {'50'} haircolor = {'Brown'}/>
      <Person firstname = {'Maria'} lastname = {'Smith'} age = {'62'} haircolor = {'Brown'}/>
    </>

  )

}
export default App