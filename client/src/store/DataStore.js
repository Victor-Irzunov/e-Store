import { makeAutoObservable } from 'mobx'
import { titles } from '../content/Content'

export default class DataStore {
	constructor() {
		this._data = titles
		this._vesylength = 0
		this._vesyarr = []
		this._likedlength = 0
		this._likedarr = []
		this._basketlength = 0
		this._isBtnFormOtzyvy = false


		makeAutoObservable(this)
	}
	setData(data) {
		this._data = data
	}
	setVesyLength(data) {
		this._vesylength = data
	}
	setVesyArr(data) {
		this._vesyarr = data
	}
	setLikedLength(data) {
		this._likedlength = data
	}
	setLikedArr(data) {
		this._likedarr = data
	}
	setBasketLength(data) {
		this._basketlength = data
	}
	setIsBtnFormOtzyvy(data) {
		this._isBtnFormOtzyvy = data
	}


	get data() {
		return this._data
	}
	get vesyLength() {
		return this._vesylength
	}
	get vesyArr() {
		return this._vesyarr
	}
	get likedLength() {
		return this._likedlength
	}
	get likedArr() {
		return this._likedarr
	}
	get basketLength() {
		return this._basketlength
	}
	get isBtnFormOtzyvy() {
		return this._isBtnFormOtzyvy
	}

}