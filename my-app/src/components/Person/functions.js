let createAttributes
let characterInfo
let filterAttributes
let getCharacterPic
let getAttributeData

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

getAttributeData = (arr) => {
	return [
		{
			type: createAttributes(arr, 'gender'),
			name: 'gender',
			default: 'Select a Gender'
		},
		{
			type: createAttributes(arr, 'birth_year'),
			name: 'birth_year',
			default: 'Select a D.O.B'
		},
		{
			type: createAttributes(arr, 'height'),
			name: 'height',
			default: 'Select a Height'
		},
		{
			type: createAttributes(arr, 'mass'),
			name: 'mass',
			default: 'Select a Weight'
		},
		{
			type: createAttributes(arr, 'hair_color'),
			name: 'hair_color',
			default: 'Select a Hair Color'
		},
		{
			type: createAttributes(arr, 'eye_color'),
			name: 'eye_color',
			default: 'Select a Eye Color'
		}
	]
}

export {
	characterInfo,
	filterAttributes,
	getCharacterPic,
	getAttributeData
}