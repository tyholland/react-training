let createAttributes
let characterInfo
let filterAttributes
let getCharacterPic

createAttributes = (data, name) => {
	const attr = name

	return data
		.map((item) => {
			return item[attr]
		})
		.reduce((array, item, index) => {
			if (array.indexOf(item) === -1) {
				array.push(item)
			}

			return array
		}, [])
}

characterInfo = (isLoading, name, img, arr) => {
	return {
		loading: isLoading,
		personName: name,
		personImg: img,
		updatedArr: arr
	}
}

filterAttributes = (character, starWarsArr) => {
	let filteredArr = starWarsArr
	const attributes = Object.keys(character)

	attributes.forEach((item) => {
		filteredArr = filteredArr.filter((data) => {
			return character[item] === data[item]
		})
	})

	return filteredArr
}

getCharacterPic = (charName, starWars) => {
	let image = ''

	starWars.forEach((item, index) => {
		if (charName === item.name) {
			const count = index + 1
			image = 'https://starwars-visualguide.com/assets/img/characters/' + count + '.jpg'
		}
	})

	return image
}

export {
	createAttributes,
	characterInfo,
	filterAttributes,
	getCharacterPic
}