let roundtrip = document.getElementById('roundtrip');
let oneWay = document.getElementById('one-way');
let multiCity = document.getElementById('multi-city');
let addFlightButton = document.getElementById('add-flight')
let increaseButtons = document.querySelectorAll('.increase-sign')
let decreaseButtons = document.querySelectorAll('.decrease-sign')
let submitDetails = document.getElementById('submit-details')


roundtrip.addEventListener('click', () => {
    if(roundtrip.checked) {
        let leaveReturn = document.getElementById('leave-return')
        let addFlightButtonDiv = document.getElementById('add-flight-div')
        addFlightButtonDiv.style.display = "none"
        let html = ""

        html = `
        <div class="col-md-6 col-6">
        <div class="form-group">
            <span class="form-label">Leaving on</span>
            <input name="leave-date" class="form-control" type="date" required>
        </div>
    </div>
    <div class="col-md-6 col-6">
        <div class="form-group">
            <span class="form-label">Returning on</span>
            <input name="return-date" class="form-control" type="date" required>
        </div>
    </div>
        `

        leaveReturn.innerHTML = html
    }

    removeAllAddedFlights()
})

oneWay.addEventListener('click', () => {
    if (oneWay.checked) {
        let leaveReturn = document.getElementById('leave-return')
        let addFlightButtonDiv = document.getElementById('add-flight-div')
        addFlightButtonDiv.style.display = "none"
        let html = ""
    
        html += `
        <div class="col-12">
                                            <div class="form-group">
                                                <span class="form-label">Leaving on</span>
                                                <input name="leave-date" class="form-control" type="date" required>
                                            </div>
                                        </div>
        `
    
        leaveReturn.innerHTML = html
    }

    removeAllAddedFlights()
})

multiCity.addEventListener('click', () => {
    if(multiCity.checked) {
        let leaveReturn = document.getElementById('leave-return');
        
        let html = ""

        html += `
        <div class="col-12">
        <div class="form-group">
            <span class="form-label">Leaving on</span>
            <input name="leave-date" class="form-control" type="date" required>
        </div>
    </div>
        `

        leaveReturn.innerHTML = html

        let addFlightButtonDiv = document.getElementById('add-flight-div')
        addFlightButtonDiv.style.display = "block"

    }
})

exchangeFun = (exchangeButton) => {
    let first = exchangeButton.parentNode.children[0].firstElementChild.lastElementChild.value
    let second = exchangeButton.parentNode.children[2].firstElementChild.lastElementChild.value;
    let third = first

    console.log(first, second)

    exchangeButton.parentNode.children[0].firstElementChild.lastElementChild.value = second;
    exchangeButton.parentNode.children[2].firstElementChild.lastElementChild.value = third;
}

addFlightButton.addEventListener('click', (e) => {
    let  addHtml = `
    <div>
    <div>
        <div class="row position-relative">
            <div class="col-md-6">
            <div class="form-group">
            <span class="form-label">From where?</span>
            <select name="from-where" class="form-select location-select">
                <option>Location 1</option>
                <option>Location 2</option>
                <option>Location 3</option>
                <option>Location 4</option>
            </select>
        </div>
            </div>
            <div class="position-absolute top-50 start-50 translate-middle exchanges">
									<i class="fas fa-exchange-alt"></i>
									</div>
            <div class="col-md-6">
            <div class="form-group">
            <span class="form-label">To where?</span>
            <select name="to-where" class="form-select location-select">
                <option>Location 1</option>
                <option>Location 2</option>
                <option>Location 3</option>
                <option>Location 4</option>
            </select>
        </div>
            </div>
            </div>
            <div class="col-12">
                <div class="form-group">
                    <span class="form-label">Leaving on</span>
                    <input name="leave-date" class="form-control" type="date">
                </div>
            </div>
        </div>

        <p class="remove-flight">Remove</p>
    </div>
    </div>
    `

    addFlightButton.parentElement.insertAdjacentHTML("beforebegin", addHtml)
    exchangeFlight()
    removeFlight()
})



function exchangeFlight() {
    let exchangeButtons = document.querySelectorAll('.exchanges')

    for (let i = 0; i < exchangeButtons.length; i++) {
        if(i+1 == exchangeButtons.length) {
            exchangeButtons[i].addEventListener('click', () =>  exchangeFun(exchangeButtons[i]))
        }
        
    }
}

singleFlightExchange = () => {
    let exchangeButton = document.querySelector('.exchange')
    exchangeButton.addEventListener('click', () => {
        let first = exchangeButton.parentNode.children[0].firstElementChild.lastElementChild.value
            let second = exchangeButton.parentNode.children[2].firstElementChild.lastElementChild.value;
            let third = first

            exchangeButton.parentNode.children[0].firstElementChild.lastElementChild.value = second;
            exchangeButton.parentNode.children[2].firstElementChild.lastElementChild.value = third;
    })

}

removeFlight = ()  => {
    removeFlightButtons = document.querySelectorAll('.remove-flight')
    for (let i = 0; i < removeFlightButtons.length; i++) {
        removeFlightButtons[i].addEventListener('click', () => {
            removeFlightButtons[i].parentNode.remove()
        })
    }
}

removeAllAddedFlights = () => {
    removeFlightButtons = document.querySelectorAll('.remove-flight')
    for (let i = 0; i < removeFlightButtons.length; i++) {
        removeFlightButtons[i].parentNode.remove()
    }
    
}



for (let i = 0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener('click', () => {
        if (decreaseButtons[i].nextSibling.value == 0) {

        } else {
        decreaseButtons[i].nextSibling.value = decreaseButtons[i].nextElementSibling.value -1
        }
    })
    
}
for (let i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener('click', () => {
        increaseButtons[i].previousElementSibling.value = parseInt(increaseButtons[i].previousElementSibling.value) + 1
    })
    
}

let abc = document.querySelector('form.form')

document.querySelector('form.form').addEventListener('submit', function(e) {
    e.preventDefault()
    const formData = new FormData(abc);

  for (var input of formData) {
    console.log(input[0] + ': ' + input[1]);
  }
})

singleFlightExchange()