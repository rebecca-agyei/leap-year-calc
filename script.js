
let check = document.getElementById("check")
let output = document.getElementById("output")

const leapYear = () => {
    let yearInput = document.getElementById("year").value
    if(yearInput <= 0){
        document.getElementById("output").innerHTML = "The year " + yearInput + " is not valid"
    }
    else{

    if (yearInput % 4 === 0) {
        if (yearInput % 100 === 0) {
          if (yearInput % 400 === 0) {
            document.getElementById("output").innerHTML = "The year " + yearInput + " is a leap year"
          } else {
            document.getElementById("output").innerHTML = "The year " + yearInput + " is not a leap year"
          }
        } else {
            document.getElementById("output").innerHTML = "The year " + yearInput + " is a leap year"
        }
      } else {
        document.getElementById("output").innerHTML = "The year " + yearInput + " is not a leap year"
      }
    }
    }


    check.addEventListener('click',()=>{leapYear()})
