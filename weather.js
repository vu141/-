

//場所によって天気が変更すること
    const input = document.querySelector('.input-search')
	const city = document.querySelector('.name .city')
	const country = document.querySelector('.name .country')
	const time = document.querySelector('.time')
	const temperature = document.querySelector('.temperature .value')
	const shortDesc = document.querySelector('.short-desc')
	const visibility = document.querySelector('.visibility span')
	const wind = document.querySelector('.wind span')
	const cloud = document.querySelector('.cloud span')
	const content = document.querySelector('.content')
	const body = document.querySelector('body')
	const value = document.querySelector('.value')


	




//weather api を呼び出す
async function changeWeatherUI(CapitalSearch) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${CapitalSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`

	// const res = await fetch(url)
	// const weather = await res.json()
	let data = await fetch(url).then(res=> res.json())

	
	// 	temp >= 30
	// 	? (document.body.className = 'hot')
	// 	: (document.body.className = 'warm')
		
		if(data.cod == 200){
			content.classList.remove('hide')
		    city.innerText = data.name
	        country.innerText = data.sys.country
            time.innerText = new Date().toLocaleString('jp')
			let temp = Math.round(data.main.temp)
			value.innerText = temp
	        shortDesc.innerText = data.weather[0] ? data.weather[0].main:''
	        visibility.innerText = data.visibility + ' (m)'
	        wind.innerText = data.wind.speed + ' (m/s)'
	        cloud.innerText = data.main.humidity + ' (%)'


			body.setAttribute('class','hot')
			if(temp < 30 ){
				body.setAttribute('class','warm')
			}
			if(temp < 25 ){
				body.setAttribute('class','cool')
			}
			if(temp < 20 ){
				body.setAttribute('class','cold')
			}
			

		}else{
			content.classList.add('hide')
		}
	

	
}


//inputの操作
input.addEventListener('keypress', (e) =>{
	if (e.keyCode === 13) {
		changeWeatherUI(e.target.value)
	}
})

changeWeatherUI('higashimatsuyama')