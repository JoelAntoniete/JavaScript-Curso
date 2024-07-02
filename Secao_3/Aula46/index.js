//data

const data = new Date(); //pega data de agora
console.log(data.toString());//pega em formato de string

const  dateparse = new Date(2019, 3,26, 15, 14, 25, 5000) //abril e mes 3 pois os meses comeca a contagem do 0
console.log(dateparse.toString())

const dateParseString = new Date('2019-04-26 20:20:45');
console.log(dateParseString.toString())

//pegar dados de uma data
console.log('Dia ', data.getDate())  //get date pega o dia do mes 
console.log('Mês ', data.getMonth())  //mes comeca com zero
console.log('Ano ', data.getFullYear())
console.log('Hora ', data.getHours())
console.log('Min ', data.getMinutes())
console.log('Seg ', data.getSeconds())
console.log('Ms ', data.getMilliseconds())
console.log('Dia semana ', data.getDay()) //pega o numero do dia da semana, e comeca domingo que é zero

console.log(Date.now())//pega os milisegundos do zuluTime

