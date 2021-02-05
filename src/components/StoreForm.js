import { Fragment, useContext, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { MyContext } from "../context/MyContext";
import { useHistory } from "react-router-dom";

const StoreForm = (props) => {  

    const { myRepo } = useContext(MyContext)
    const history = useHistory()  
    const [state, setState] = useState(myRepo.stState)

    useEffect(() => {
        let suscription = myRepo.onChangeSt.subscribe(newState => {
            setState(newState)
        })
        if (props.id > 0) {
            myRepo.storeFind(props.id)
        }       
        return () => {
            if (suscription != null)
                suscription.unsubscribe()
        }
    }, [myRepo])    

    const handleChange = (event) => {
        let newstore = { ...state.store, [event.target.name]: event.target.value }
        setState({ ...state, store: newstore })           
    }

    const handleUpdate = () => {       
        try {
            if (state.store.name.trim() == "")
                throw new Error("Name is required.")           
            if (state.store.email.trim() == "")
                throw new Error("Email is required.")           
            
            myRepo.storeUpdate(state.store)
        } catch (error) {
            alert(error.message)
        }      
    }

    const handleInsert = async () => {       
        try {
            if (state.store.name.trim() == "")
                throw new Error("Name is required.")            
            if (state.store.email.trim() == "")
                throw new Error("Email is required.")           
            
            await myRepo.storeInsert(state.store)
            //console.log(state.customer)
            history.go(`/store/${state.store.id}`)
        } catch (error) {
            alert(error.message)
        }      
    }

    const handleDelete = async () => {       
        try {            
            await myRepo.storeDelete(state.store.id)
            history.go("/stores")
        } catch (error) {
            alert(error.message)
        }      
    }

    if (state.loading) {
        return (
            <div className="container loading">
                <div className="spinner-border text-info"></div>
                <div>...Loading</div>
            </div>
        )
    } else if (state.error) {
        return (
            <Fragment>                
                <div className="container error">
                    {state.message}
                </div>
            </Fragment>
        )
    } else {

        let Buttons
        if (props.id > 0) {
            Buttons = <Fragment>
                <Button type="button" color="primary" onClick={handleUpdate}>Update</Button>
                <Button type="button" onClick={handleDelete}>Delete</Button>
            </Fragment>
        } else {
            Buttons = <Button type="button" onClick={handleInsert}>Save</Button>
        }
        return (
            <Container>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" placeholder="Name" onChange={handleChange} defaultValue={state.store.name} />
                </FormGroup>              
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="text" name="email" placeholder="Email" onChange={handleChange} defaultValue={state.store.email} />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input type="text" name="phone" placeholder="Phone" onChange={handleChange} defaultValue={state.store.phone} />
                </FormGroup>
                <FormGroup>
                    <Label for="street">Street</Label>
                    <Input type="text" name="street" placeholder="Street" onChange={handleChange} defaultValue={state.store.street} />
                </FormGroup>
                <FormGroup>
                    <Label for="city">City</Label>
                    <Input type="text" name="city" placeholder="City" onChange={handleChange} defaultValue={state.store.city} />
                </FormGroup>
                {Buttons}  
            </Form>
            </Container>            
        )
    }
}
export default StoreForm
