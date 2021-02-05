export const baseURL = `https://localhost:44337/`

export class StoreAPI {    
	static async list(page) {    
		const response = await fetch(`${baseURL}store?page=${page}`)
		const data = await response.json()		
		return data 
	}
	static async find(id) {    
		const response = await fetch(`${baseURL}store/${id}`)
		const data = await response.json()	
		return data 
	} 
	static async update(store) {    
		const response = await fetch(`${baseURL}store`, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(store)
		});
		const data = await response.json()	
		return data 
	} 
	static async insert(store) {    
		const response = await fetch(`${baseURL}store`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(store)
		});
		const data = await response.json()	
		return data 
	}
	static async delete(id) {    
		const response = await fetch(`${baseURL}store/${id}`, {
			method: 'DELETE'
		});
		const data = await response.json()	
		return data 
	}  
}
