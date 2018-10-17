const allData = (name, occupation, weapon, cartoon) => {
  $(".characters-container").append(`<div class="character-info">
  <div class="name">Character Name</div>
  <div class="occupation">Character Occupation</div>
  <div class="cartoon">Is a Cartoon?</div>
  <div class="weapon">Character Weapon</div>`)
}
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then(res => {
        console.log(res.data)
        res.data.forEach(e => {
          allData(e.name, e.occupation, e.weapon, e.cartoon)
        })
    })
    
  }

  getOneRegister (charID) {
    axios.get(`${this.BASE_URL}/characters/${charID}`)
    .then(res => {
        console.log(res.data)
        res.data.forEach(e => {
          allData(e.name, e.occupation, e.weapon, e.cartoon)
        })
    })
  }

  createOneRegister (name, occupation, weapon, cartoon) {
    const newChar = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon,
    }
      axios.post(`${this.BASE_URL}/characters`,newChar)
      .then( res => {

      })
        this.getFullList();

      }
    
  }

  updateOneRegister () {
    const updateChar = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon,
    }
      axios.post(`${this.BASE_URL}/characters`,updateChar)
      .then( res => {

      })
        this.getFullList();

      };


  deleteOneRegister () {
    const newChar = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon,
    }
      axios.post(`${this.BASE_URL}/characters`,newChar)
      .then( res => {

      })
        this.getFullList();

      }
  

