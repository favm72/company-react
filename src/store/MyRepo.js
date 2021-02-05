import { Subject } from "rxjs";
import { CustomerAPI } from "../api/CustomersAPI";
import { StoreAPI } from "../api/StoreAPI";

export default class MyRepo {
	onChange = new Subject()
	customerState = {
		loading: false,
		customers: [],
		error: false,
		message: "",
		page: 0
	}
	onChangeStores = new Subject()
	storeState = {
		loading: false,
		stores: [],
		error: false,
		message: "",
		page: 0
	}
	onChangeCust = new Subject()
	custState = {
		customer: { 
			id: 0,
			firstName: "", 
			lastName: "", 
			email: "",
			city: "",
			phone: "",
			zipCode: "",
			state: ""
		},		
		loading: false,
        error: false,
        message: ""
	}
	onChangeSt = new Subject()
	stState = {
		store: { 
			id: 0,
			name: "", 		
			email: "",
			city: "",
			phone: "",
			zipCode: "",
			state: ""
		},		
		loading: false,
        error: false,
        message: ""
	}
    delay(ms) {
        return new Promise(res => setTimeout(res, ms))
    }
	async customerList() {
		try {
			this.customerState.error = false
			this.customerState.loading = true
			this.onChange.next({ ...this.customerState })						
			//await this.delay(1500)
			let data = await CustomerAPI.list(this.customerState.page)
			if (data.status == false)
				throw new Error(data.message)			
			this.customerState.customers = data.data
			this.customerState.loading = false
			this.onChange.next({ ...this.customerState })
		} catch (error) {	
			this.customerState.loading = false
			this.customerState.error = true
			this.customerState.message = error.message	
			this.onChange.next({ ...this.customerState })
		}
	}

	async customerFind(id) {
		try {
			this.custState.error = false
			this.custState.loading = true
			this.onChangeCust.next({ ...this.custState })		
			let data = await CustomerAPI.find(id)
			if (data.status == false)
				throw new Error(data.message)			
			this.custState.customer = data.data
			this.custState.loading = false
			this.onChangeCust.next({ ...this.custState })
		} catch (error) {	
			this.custState.loading = false
			this.custState.error = true
			this.custState.message = error.message	
			this.onChangeCust.next({ ...this.custState })
		}
	}

	async customerInsert(customer) {
		try {
			this.custState.error = false
			this.custState.loading = true
			this.onChangeCust.next({ ...this.custState })		
			let data = await CustomerAPI.insert(customer)
			if (data.status == false)
				throw new Error(data.message)				
			this.custState.customer = data.data
			this.custState.loading = false
			this.onChangeCust.next({ ...this.custState })
		} catch (error) {	
			this.custState.loading = false
			this.custState.error = true
			this.custState.message = error.message	
			this.onChangeCust.next({ ...this.custState })
		}
	}

	async customerUpdate(customer) {
		try {
			this.custState.error = false
			this.custState.loading = true
			this.onChangeCust.next({ ...this.custState })		
			let data = await CustomerAPI.update(customer)
			if (data.status == false)
				throw new Error(data.message)			
			
			data = await CustomerAPI.find(customer.id)
			if (data.status == false)
				throw new Error(data.message)
				
			this.custState.customer = data.data
			this.custState.loading = false
			this.onChangeCust.next({ ...this.custState })
		} catch (error) {	
			this.custState.loading = false
			this.custState.error = true
			this.custState.message = error.message	
			this.onChangeCust.next({ ...this.custState })
		}
	}

	async customerDelete(id) {
		try {
			this.custState.error = false
			this.custState.loading = true
			this.onChangeCust.next({ ...this.custState })		
			let data = await CustomerAPI.delete(id)
			if (data.status == false)
				throw new Error(data.message)			
			
			this.custState.loading = false
			this.onChangeCust.next({ ...this.custState })
		} catch (error) {	
			this.custState.loading = false
			this.custState.error = true
			this.custState.message = error.message	
			this.onChangeCust.next({ ...this.custState })
		}
	}



	async storeList() {
		try {
			this.storeState.error = false
			this.storeState.loading = true
			this.onChangeStores.next({ ...this.storeState })						
			//await this.delay(1500)
			let data = await StoreAPI.list(this.storeState.page)
			if (data.status == false)
				throw new Error(data.message)			
			this.storeState.stores = data.data
			this.storeState.loading = false
			this.onChangeStores.next({ ...this.storeState })
		} catch (error) {	
			this.storeState.loading = false
			this.storeState.error = true
			this.storeState.message = error.message	
			this.onChangeStores.next({ ...this.storeState })
		}
	}

	async storeFind(id) {
		try {
			this.stState.error = false
			this.stState.loading = true
			this.onChangeSt.next({ ...this.stState })		
			let data = await StoreAPI.find(id)
			if (data.status == false)
				throw new Error(data.message)			
			this.stState.store = data.data
			this.stState.loading = false
			this.onChangeSt.next({ ...this.stState })
		} catch (error) {	
			this.stState.loading = false
			this.stState.error = true
			this.stState.message = error.message	
			this.onChangeSt.next({ ...this.stState })
		}
	}

	async storeInsert(store) {
		try {
			this.stState.error = false
			this.stState.loading = true
			this.onChangeSt.next({ ...this.stState })		
			let data = await StoreAPI.insert(store)
			if (data.status == false)
				throw new Error(data.message)				
			this.stState.store = data.data
			this.stState.loading = false
			this.onChangeSt.next({ ...this.stState })
		} catch (error) {	
			this.stState.loading = false
			this.stState.error = true
			this.stState.message = error.message	
			this.onChangeSt.next({ ...this.stState })
		}
	}

	async storeUpdate(store) {
		try {
			this.stState.error = false
			this.stState.loading = true
			this.onChangeSt.next({ ...this.stState })		
			let data = await StoreAPI.update(store)
			if (data.status == false)
				throw new Error(data.message)			
			
			data = await StoreAPI.find(store.id)
			if (data.status == false)
				throw new Error(data.message)
				
			this.stState.store = data.data
			this.stState.loading = false
			this.onChangeSt.next({ ...this.stState })
		} catch (error) {	
			this.stState.loading = false
			this.stState.error = true
			this.stState.message = error.message	
			this.onChangeSt.next({ ...this.stState })
		}
	}

	async storeDelete(id) {
		try {
			this.stState.error = false
			this.stState.loading = true
			this.onChangeSt.next({ ...this.stState })		
			let data = await StoreAPI.delete(id)
			if (data.status == false)
				throw new Error(data.message)			
			
			this.stState.loading = false
			this.onChangeSt.next({ ...this.stState })
		} catch (error) {	
			this.stState.loading = false
			this.stState.error = true
			this.stState.message = error.message	
			this.onChangeSt.next({ ...this.stState })
		}
	}
}
