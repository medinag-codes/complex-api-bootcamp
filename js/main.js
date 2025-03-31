document.querySelector('button').addEventListener('click', getRandomDogFacts)

function getRandomDogFacts(){
    
    const url = `https://dog.ceo/api/breeds/image/random`
      
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.message

            factsUrl = `https://dogapi.dog/api/v2/facts`

            fetch(factsUrl)
                .then(res => res.json())
                .then(facts => {
                console.log(facts)
                document.querySelector('p').innerText = facts.data[0].attributes.body
                console.log(facts.data[0].attributes)
            })
            .catch(err => {
                console.log(`error ${err}`)
        })
            
        })
        .catch(err => {
            console.log(`error ${err}`)
    })
}