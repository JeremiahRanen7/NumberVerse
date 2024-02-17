    
    let fact = document.getElementById("fact")
    let factContent = document.getElementById("factContent")
    let numInput = document.getElementById("numInput")
    numInput.addEventListener("input",getFactsNumber)
    function getFactsNumber(){

        console.log("Fetching...")
        let number = numInput.value
        console.log(number)
        fetch(`http://numbersapi.com/${number}`)
        .then((res)=>{
            return res.text()
        })

        .then((data)=>{
            console.log(data)

            if(number!=''){
                fact.style.display="block"
                factContent.innerText=data
            }

            else{
                fact.style.display="none"
                factText.innerText=''
            }
        })
    }