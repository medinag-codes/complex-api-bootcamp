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
            for(let i = 0; i < 50; i++ ){
                let ul = document.querySelector('ul')
                let li = document.createElement('li')
                let img = document.createElement('img')
                let span = document.createElement('span')
                let h2 = document.createElement('h2')
                let h3 = document.createElement('h3')
                ul.appendChild(li)
                li.appendChild(img)
                li.appendChild(h2)
                li.appendChild(span)
                li.appendChild(h3)
                
                span.innerText = `${data.pets[i].addr_city}, ${data.pets[i].addr_state_code}`
                h3.innerText = data.pets[i].primary_breed
                h2.innerText = data.pets[i].pet_name
                img.src = data.pets[i].results_photo_url

                const breed = data.pets[i].primary_breed
                const factsUrl = `https://api.api-ninjas.com/v1/dogs?x-api-key=ZtXysEAnTDhvYJoFgTOTfFCutwSsamA5e2DQXAuT&name=${breed}`
                console.log(factsUrl)

                fetch(factsUrl)
                    .then(res => res.json())
                    .then(facts => {
                    console.log(facts)
                    
                    let h4 = document.createElement('h4')
                    let h5 = document.createElement('h5')
                    let h6 = document.createElement('h6')
                    
                    li.appendChild(h4)
                    li.appendChild(h5)
                    li.appendChild(h6)

                    h4.innerText = `Good with other dogs: ${facts[0].good_with_other_dogs}`
                    h5.innerText = `Good with children: ${facts[0].good_with_children}`
                    h6.innerText = `Life Expenctancy: ${facts[0].max_life_expectancy}`
                    console.log(facts[0].good_with_other_dogs)

                })
                .catch(err => {
                    console.log(`error ${err}`)
                })
            }

        })
        .catch(err => {
            console.log(`error ${err}`)
    })
}