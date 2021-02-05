import { Fragment, useContext, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { MyContext } from "../context/MyContext";
import { useHistory } from "react-router-dom";

const CustForm = (props) => {  

    const { myRepo } = useContext(MyContext)
    const history = useHistory()  
    const [state, setState] = useState(myRepo.custState)

    useEffect(() => {
        let suscription = myRepo.onChangeCust.subscribe(newState => {
            setState(newState)
        })
        if (props.id > 0) {
            myRepo.customerFind(props.id)
        }       
        return () => {
            if (suscription != null)
                suscription.unsubscribe()
        }
    }, [myRepo])    

    const handleChange = (event) => {
        let newcust = { ...state.customer, [event.target.name]: event.target.value }
        setState({ ...state, customer: newcust })           
    }

    const handleUpdate = () => {       
        try {
            if (state.customer.firstName.trim() == "")
                throw new Error("FirstName is required.")
            if (state.customer.lastName.trim() == "")
                throw new Error("LastName is required.")
            if (state.customer.email.trim() == "")
                throw new Error("Email is required.")           
            
            myRepo.customerUpdate(state.customer)
        } catch (error) {
            alert(error.message)
        }      
    }

    const handleInsert = async () => {       
        try {
            if (state.customer.firstName.trim() == "")
                throw new Error("FirstName is required.")
            if (state.customer.lastName.trim() == "")
                throw new Error("LastName is required.")
            if (state.customer.email.trim() == "")
                throw new Error("Email is required.")           
            
            await myRepo.customerInsert(state.customer)
            //console.log(state.customer)
            history.go(`/customer/${state.customer.id}`)
        } catch (error) {
            alert(error.message)
        }      
    }

    const handleDelete = async () => {       
        try {            
            await myRepo.customerDelete(state.customer.id)
            history.go("/customers")
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
                    <Label for="firstName">FirstName</Label>
                    <Input type="text" name="firstName" placeholder="FirstName" onChange={handleChange} defaultValue={state.customer.firstName} />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">LastName</Label>
                    <Input type="text" name="lastName" placeholder="LastName" onChange={handleChange} defaultValue={state.customer.lastName} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="text" name="email" placeholder="Email" onChange={handleChange} defaultValue={state.customer.email} />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input type="text" name="phone" placeholder="Phone" onChange={handleChange} defaultValue={state.customer.phone} />
                </FormGroup>
                <FormGroup>
                    <Label for="street">Street</Label>
                    <Input type="text" name="street" placeholder="Street" onChange={handleChange} defaultValue={state.customer.street} />
                </FormGroup>
                <FormGroup>
                    <Label for="city">City</Label>
                    <Input type="text" name="city" placeholder="City" onChange={handleChange} defaultValue={state.customer.city} />
                </FormGroup>
                {Buttons}     
            </Form>
            </Container>            
        )
    }
}
export default CustForm
