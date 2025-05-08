import { useState, useEffect } from 'react'
import countryService from './services/countries'

const App = () => {

const [countries, setCountries] = useState([])
const [search, setCountrySearch] = useState('')

/*
This first checks that is there empty spaces and if not, it means
that real data is available. Search is done using lowercase letters
*/

const filteredCountries = search.trim() !== '' 
? countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  ) : [];

// This defines the number of how many results are shown
const ShowResults = filteredCountries.length > 0 && filteredCountries.length < 3

/*
Effects let a component connect to and synchronize with external systems.
This includes dealing with network, browser DOM, animations, widgets written
using a different UI library, and other non-React code.

So by default, the effect is always run after the component has been rendered.
In our case, however, we only want to execute the effect along with the first render.

The second parameter of useEffect is used to specify how often the effect is run. 
If the second parameter is an empty array [], then the effect is only run along
with the first render of the component. */

useEffect(() => {
  countryService
    .getCountryData()
    .then(response => {
      setCountries(response.data)
      console.log('Promise fulfilled and data received from server')
      const data = (response.data)
      data.forEach(item => {
        console.log(item.name.common);
      });
    })
    .catch(error => {
      console.log('fail because of:', error)
    })
}, [ ])

/* Tämä alla oleva näkyy ensin ja se näyttää että countiers on tyhjä.
Käytännössä sivu renderoidään ekan kerran. Sen jälkeen ajetaan effect loop
*/

// console.log('render', countries)

const handleSearch = (event) => {
  console.log(event.target.value)
  setCountrySearch(event.target.value)
}

return (
  <div>
    <div> Find countries
      <input value={search} onChange={handleSearch}/>
    </div>
    <ul style={{ listStyleType: 'none', padding: 0 }} >
      {ShowResults && filteredCountries.map((search) => (
        <li key={search.name.common} className="countries" > {search.name.common}
        </li>
        ))}
    </ul>
  </div>
)}

export default App
