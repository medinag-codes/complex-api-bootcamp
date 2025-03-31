document.querySelector('button').addEventListener('click', findDogs)

function findDogs(){
    document.querySelector('ul').innerHTML = ""

    let zipcode = document.querySelector('#zipcode').value 
    console.log(zipcode)
    let range = document.querySelector('#range').value
    console.log(range)
    let sex = document.querySelector('#sex').value
    console.log(sex)
    let age = document.querySelector('#age').value
    console.log(age)
    
    const url = `https://api-staging.adoptapet.com/search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json&city_or_zip=${zipcode}&geo_range=${range}&species=dog&sex=${sex}&age=${age}&include_mixes=`
      
    console.log(url)   

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for(let i = 0; i < 20; i++ ){
                let ul = document.querySelector('ul')
                let li = document.createElement('li')
                let img = document.createElement('img')
                let h2 = document.createElement('h2')
                let h3 = document.createElement('h3')
                ul.appendChild(li)
                li.appendChild(img)
                li.appendChild(h2)
                li.appendChild(h3)
                
                
                h3.innerText = data.pets[i].primary_breed
                h2.innerText = data.pets[i].pet_name
                img.src = data.pets[i].results_photo_url
            }
            
            // const factsUrl = `https://dog.ceo/api/${breed}`

            // fetch(factsUrl)
            //     .then(res => res.json())
            //     .then(facts => {
            //     console.log(facts)
            //     // document.querySelector('p').innerText = facts.
            //     // console.log()
            // })
            // .catch(err => {
            //     console.log(`error ${err}`)
        // })
            
        })
        .catch(err => {
            console.log(`error ${err}`)
    })
}