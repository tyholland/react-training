function createAttributes(data, name) {
	const attr = name

	return data
		.map(function(item) {
			return item[attr]
		})
		.reduce(function(array, item, index) {
			if (array.indexOf(item) === -1) {
				array.push(item)
			}

			return array
		}, [])
}

function characterInfo(isLoading, name, img, arr) {
	return {
		loading: isLoading,
		personName: name,
		personImg: img,
		updatedArr: arr
	}
}

function filterAttributes(character, starWarsArr) {
	let filteredArr = starWarsArr
	let attributes = []

	attributes = Object.keys(character)

	attributes.forEach(function(item) {
		filteredArr = filteredArr.filter(function(data) {
			return character[item] === data[item]
		})
	})

	return filteredArr
}

function getCharacterPic(charName, starWars) {
	let image = ''

	starWars.forEach(function(item, index) {
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