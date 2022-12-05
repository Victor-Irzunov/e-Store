import { $host } from "./index"


export const fetchProducts = async () => {
    const { data } = await $host.get('products?limit=100')
    return data
}

//: search
export const searchDevice = async (query = 0) => {
    const { data } = await $host.get('products/search?q=' + query)
    return data
}

export const fetchBrands = async () => {
	const { data } = await $host.get('api/brand',)
	return data
}
export const fetchType = async () => {
	const { data } = await $host.get('api/type',)
	return data
}
export const fetchSize = async () => {
	const { data } = await $host.get('api/size',)
	return data
}
export const fetchColor = async () => {
	const { data } = await $host.get('api/color',)
	return data
}
export const fetchNaznachenie = async () => {
	const { data } = await $host.get('api/naznachenie',)
	return data
}
export const fetchOpisanie = async () => {
	const { data } = await $host.get('api/opisanie',)
	return data
}
export const fetchCategory = async () => {
	const { data } = await $host.get('api/category',)
	return data
}








