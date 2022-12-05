import { $authHost } from "./index"


export const createProduct = async (device) => {
	const { data } = await $authHost.post('api/product', device)
	return data
}

export const createBrand = async title => {
	const { data } = await $authHost.post('api/brand', title)
	return data
}
export const deleteBrand = async id => {
	const { data } = await $authHost.delete('api/brand/' + id)
	return data
}


export const createType = async type => {
	const { data } = await $authHost.post('api/type', type)
	return data
}
export const deleteeType = async id => {
	const { data } = await $authHost.delete('api/type/' + id)
	return data
}

export const createSize = async size => {
	const { data } = await $authHost.post('api/size', size)
	return data
}
export const deleteSize = async id => {
	const { data } = await $authHost.delete('api/size/' + id)
	return data
}

export const createColor = async obj => {
	const { data } = await $authHost.post('api/color', obj)
	return data
}
export const deleteColor = async id => {
	const { data } = await $authHost.delete('api/color/' + id)
	return data
}

export const createNaznachenie = async type => {
	const { data } = await $authHost.post('api/naznachenie', type)
	return data
}
export const deleteNaznachenie = async id => {
	const { data } = await $authHost.delete('api/naznachenie/' + id)
	return data
}

export const createOpisanie = async arr => {
	const { data } = await $authHost.post('api/opisanie', arr)
	return data
}
export const deleteOpisanie = async id => {
	const { data } = await $authHost.delete('api/opisanie/' + id)
	return data
}


export const createCategory = async arr => {
	const { data } = await $authHost.post('api/category', arr)
	return data
}
export const deleteCategory = async id => {
	const { data } = await $authHost.delete('api/category/' + id)
	return data
}

