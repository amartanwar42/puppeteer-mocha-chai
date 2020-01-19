module.exports = {
    generateName: function(length) {
      let result = ''
      let characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      let charactersLegth = characters.length
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLegth))
      }
      return result
    },
   
    generateNumbers: function() {
      let numbers = Math.floor(Math.random() * 9000000000) + 100000000
      return numbers.toString()
    },
  }