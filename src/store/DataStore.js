import { makeAutoObservable } from 'mobx'
import { titles } from '../content/Content'

export default class DataStore {
	constructor() {
		this._data = titles
		this._vesylength = 0
		this._likedlength = 0
		this._basketlength = 0

		makeAutoObservable(this)
	}
	setData(data) {
		this._data = data
	}
	setVesyLength(data) {
		this._vesylength = data
	}
	setLikedLength(data) {
		this._likedlength = data
	}
	setBasketLength(data) {
		this._basketlength = data
	}


	get data() {
		return this._data
	}
	get vesyLength() {
		return this._vesylength
	}
	get likedLength() {
		return this._likedlength
	}
	get basketLength() {
		return this._basketlength
	}

}