import useFetchData from './useFetchData.js'
import "@picocss/pico/css/pico.css"
import "./SearchCard.css"
import MajorSearch from './MajorSearch.jsx'




function App() {

  const { records, loading, error } = useFetchData("https://student-data-api.miayadennis.workers.dev/api/v1/datasets/college_majors_incomes/records?limit=172")

  if (loading) {
    return <h1>Loading...</h1>
  }

/*Health filter
  function filterHealthMajors(item) {
    return item["Major_category"] === "Health"
  }

  const healthMajors = records.filter(  (item) => item["Major_category"] === "Health" )
  
  const healthSection = healthMajors.map( (item) => (
    <article>
      <h1>{item.Major}</h1>
      <p>Average Income: {item.Median}</p>
      <p>Employment: {item.Employed}</p>
    </article>
  ) )*/
//Education filter
   function filterEducationMajors(item) {
    return item["Major_category"] === "Education"
  }

  const educationMajors = records.filter(  (item) => item["Major_category"] === "Education" )
  
  const educationSection = educationMajors.map( (item) => (
    <article>
      <h1>{item.Major}</h1>
      <p>Average Income: {item.Median}</p>
      <p>Employment: {item.Employed}</p>
    </article>
  ) )
//Business filter
   function filterArtMajors(item) {
    return item["Major_category"] === "Art"
  }

  const artsMajors = records.filter(  (item) => item["Major_category"] === "Arts" )
  
  const artsSection = artsMajors.map( (item) => (
    <article>
      <h1>{item.Major}</h1>
      <p>Average Income: {item.Median}</p>
      <p>Employment: {item.Employed}</p>
    </article>
  ) )






  const major1 = records[0]
  const major2 = records[1]
  const major3 = records[2]
  const major4 = records[3]
  const major37 = records[36]
  const major35 = records[35]
  const major22 = records[32]
  const major51 = records[50]
  const major48 = records[47]
  const major59= records[58]
  const major55 = records[54]
  const major17 = records[16]
  const major33 = records[33]
  const major32 = records[31]
  const major34 = records[34]
  const major39 = records[38]
  const major57 = records[56]
  const major79 = records[78]
  const major72 = records[71]
  const major83 = records[82]
  const major84 = records[83]
  const major85 = records[84]
  const major63 = records[62]
  const major94 = records[93]
 


  return (

    <div className="container">
      <h1>Major Match</h1>
      <MajorSearch />
      <img src="https://plus.unsplash.com/premium_photo-1770188615456-f23dc1c686bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
      <p>Find the best major for your future!</p>


    <div>
      <h1>Education Majors</h1>
      <div className="grid">
        { educationSection } 
      </div>
    </div>

    <div>
      <h1> Art Majors</h1>
      <div className="grid">
        { artsSection } 
      </div>
    </div>

    <div>
      <h1> Explore over 100 more majors! </h1>
    </div>
   
      <div>
       <article>
        <h1>{major1.Major}</h1>
        <p>Average Income:{major1.Median}</p>
        <p>Category: {major1.Major_category}</p>
        <p>Employed: {major1.Employed}</p>
        <p>Unemployed: {major1.Unemployed}</p>  
       </article> 
      </div>
       
          <div>
       <article>
        <h1>{major22.Major}</h1>
        <p>Average Income:{major22.Median}</p>
        <p>Category: {major22.Major_category}</p>
        <p>Employed: {major22.Employed}</p>
        <p>Unemployed: {major22.Unemployed}</p>  
       </article> 
      </div>

       
      <div>
       <article>
        <h1>{major4.Major}</h1>
        <p>Average Income:{major4.Median}</p>
        <p>Category: {major4.Major_category}</p>
        <p>Employed: {major4.Employed}</p>
        <p>Unemployed: {major4.Unemployed}</p>  
       </article> 
      </div>  
      
       <div>
       <article>
        <h1>{major63.Major}</h1>
        <p>Average Income:{major63.Median}</p>
        <p>Category: {major63.Major_category}</p>
        <p>Employed: {major63.Employed}</p>
        <p>Unemployed: {major63.Unemployed}</p>  
       </article> 
      </div> 


      <div> 
        <article> 
            <h1>{major2.Major}</h1>
        <p>Average Income:{major2.Median}</p>
        <p>Category: {major2.Major_category}</p>
        <p>Employed: {major2.Employed}</p>
        <p>Unemployed: {major2.Unemployed}</p>  
        </article>
      </div>

      <div> 
        <article> 
            <h1>{major3.Major}</h1>
        <p>Average Income:{major3.Median}</p>
        <p>Category: {major3.Major_category}</p>
        <p>Employed: {major3.Employed}</p>
        <p>Unemployed: {major3.Unemployed}</p>  
        </article>
      </div>

      <div> 
        <article> 
            <h1>{major17.Major}</h1>
        <p>Average Income:{major17.Median}</p>
        <p>Category: {major17.Major_category}</p>
        <p>Employed: {major17.Employed}</p>
        <p>Unemployed: {major17.Unemployed}</p>  
        </article>
      </div>
      
      <div> 
        <article> 
            <h1>{major32.Major}</h1>
        <p>Average Income:{major32.Median}</p>
        <p>Category: {major32.Major_category}</p>
        <p>Employed: {major32.Employed}</p>
        <p>Unemployed: {major32.Unemployed}</p>  
        </article>
      </div>

      <div> 
        <article> 
            <h1>{major35.Major}</h1>
        <p>Average Income:{major35.Median}</p>
        <p>Category: {major35.Major_category}</p>
        <p>Employed: {major35.Employed}</p>
        <p>Unemployed: {major35.Unemployed}</p>  
        </article>
      </div>

      <div> 
        <article> 
            <h1>{major34.Major}</h1>
        <p>Average Income:{major34.Median}</p>
        <p>Category: {major34.Major_category}</p>
        <p>Employed: {major34.Employed}</p>
        <p>Unemployed: {major34.Unemployed}</p>  
        </article>
      </div>

      <div> 
        <article> 
            <h1>{major37.Major}</h1>
        <p>Average Income:{major37.Median}</p>
        <p>Category: {major37.Major_category}</p>
        <p>Employed: {major37.Employed}</p>
        <p>Unemployed: {major37.Unemployed}</p>  
        </article>
      </div>

      <div> 
        <article> 
            <h1>{major33.Major}</h1>
        <p>Average Income:{major33.Median}</p>
        <p>Category: {major33.Major_category}</p>
        <p>Employed: {major33.Employed}</p>
        <p>Unemployed: {major33.Unemployed}</p>  
        </article>
      </div>

      <div> 
        <article> 
            <h1>{major51.Major}</h1>
        <p>Average Income:{major51.Median}</p>
        <p>Category: {major51.Major_category}</p>
        <p>Employed: {major51.Employed}</p>
        <p>Unemployed: {major51.Unemployed}</p>  
        </article>
      </div>

      <div> 
        <article> 
            <h1>{major39.Major}</h1>
        <p>Average Income:{major39.Median}</p>
        <p>Category: {major39.Major_category}</p>
        <p>Employed: {major39.Employed}</p>
        <p>Unemployed: {major39.Unemployed}</p>  
        </article>
      </div>

      <div> 
        <article> 
            <h1>{major48.Major}</h1>
        <p>Average Income:{major48.Median}</p>
        <p>Category: {major48.Major_category}</p>
        <p>Employed: {major48.Employed}</p>
        <p>Unemployed: {major48.Unemployed}</p>  
        </article>
      </div>
       
      
      <div> 
        <article> 
            <h1>{major59.Major}</h1>
        <p>Average Income:{major59.Median}</p>
        <p>Category: {major59.Major_category}</p>
        <p>Employed: {major59.Employed}</p>
        <p>Unemployed: {major59.Unemployed}</p>  
        </article>
      </div>

      <div> 
        <article> 
            <h1>{major55.Major}</h1>
        <p>Average Income:{major55.Median}</p>
        <p>Category: {major55.Major_category}</p>
        <p>Employed: {major55.Employed}</p>
        <p>Unemployed: {major55.Unemployed}</p>  
        </article>
      </div>
      
      
      <div> 
        <article> 
            <h1>{major57.Major}</h1>
        <p>Average Income:{major57.Median}</p>
        <p>Category: {major57.Major_category}</p>
        <p>Employed: {major57.Employed}</p>
        <p>Unemployed: {major57.Unemployed}</p>  
        </article>
      </div>

      <div> 
        <article> 
            <h1>{major79.Major}</h1>
        <p>Average Income:{major79.Median}</p>
        <p>Category: {major79.Major_category}</p>
        <p>Employed: {major79.Employed}</p>
        <p>Unemployed: {major79.Unemployed}</p>  
        </article>
      </div>

        <div> 
        <article> 
            <h1>{major72.Major}</h1>
        <p>Average Income:{major72.Median}</p>
        <p>Category: {major72.Major_category}</p>
        <p>Employed: {major72.Employed}</p>
        <p>Unemployed: {major72.Unemployed}</p>  
        </article>
      </div>
      
        <div> 
        <article> 
            <h1>{major83.Major}</h1>
        <p>Average Income:{major83.Median}</p>
        <p>Category: {major83.Major_category}</p>
        <p>Employed: {major83.Employed}</p>
        <p>Unemployed: {major83.Unemployed}</p>  
        </article>
      </div>

        <div> 
        <article> 
            <h1>{major84.Major}</h1>
        <p>Average Income:{major84.Median}</p>
        <p>Category: {major84.Major_category}</p>
        <p>Employed: {major84.Employed}</p>
        <p>Unemployed: {major84.Unemployed}</p>  
        </article>
      </div>

        <div> 
        <article> 
            <h1>{major85.Major}</h1>
        <p>Average Income:{major85.Median}</p>
        <p>Category: {major85.Major_category}</p>
        <p>Employed: {major85.Employed}</p>
        <p>Unemployed: {major85.Unemployed}</p>  
        </article>
      </div>
      
        <div> 
        <article> 
            <h1>{major94.Major}</h1>
        <p>Average Income:{major94.Median}</p>
        <p>Category: {major94.Major_category}</p>
        <p>Employed: {major94.Employed}</p>
        <p>Unemployed: {major94.Unemployed}</p>  
        </article>
      </div>

      


</div>
  )
}

export default App  