const theme = {
  light: {
    "bg": "hsl(0, 0%, 100%)",
    "header-bg": "hsl(225, 100%, 98%)",
    "card-bg": "hsl(227, 47%, 96%)",
    "card-active-bg": "rgba(225,227,240,255)",
    "normal-color": "hsl(228, 12%, 44%)",
    "bold-color": "hsl(230, 17%, 14%)"
  },
  dark: {
    "bg": "hsl(230, 17%, 14%)",
    "header-bg": "hsl(232, 19%, 15%)",
    "card-bg": "hsl(228, 28%, 20%)",
    "card-active-bg": "rgba(51,58,86,255)",
    "normal-color": "hsl(228, 34%, 66%)",
    "bold-color": "hsl(0, 0%, 100%)"
  }
}
let curTheme = "light"

const root = document.querySelector(":root")
const toggleButton = document.querySelector(".toggle-btn")
const toggleMover = document.querySelector(".toggle-btn > span")

function updateTheme(){
  toggleMover.className = `toggle-btn--${curTheme}`
  if(curTheme === "dark"){
    toggleButton.style.backgroundImage = "var(--toggle-active-bg)"
  }else{
    toggleButton.style.backgroundImage = "none"
  }

  for(const [key,value] of Object.entries(theme[curTheme])){ root.style.setProperty(`--${key}`,value)
  }
}

toggleButton.addEventListener('click',event => {
  event.preventDefault()

  if(curTheme === "dark"){
    curTheme = "light"
  }else {
    curTheme = "dark"
  }
  updateTheme()
})

updateTheme()
