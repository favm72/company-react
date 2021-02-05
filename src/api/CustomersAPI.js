export const baseURL = `https://localhost:44337/`

export class CustomerAPI {    
	static async list(page) {    
		const response = await fetch(`${baseURL}customer?page=${page}`)
		const data = await response.json()		
		return data 
	}
	static async find(id) {    
		const response = await fetch(`${baseURL}customer/${id}`)
		const data = await response.json()	
		return data 
	} 
	static async update(customer) {    
		const response = await fetch(`${baseURL}customer`, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(customer)
		});
		const data = await response.json()	
		return data 
	} 
	static async insert(customer) {    
		const response = await fetch(`${baseURL}customer`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(customer)
		});
		const data = await response.json()	
		return data 
	}
	static async delete(id) {    
		const response = await fetch(`${baseURL}customer/${id}`, {
			method: 'DELETE'
		});
		const data = await response.json()	
		return data 
	}  
}
