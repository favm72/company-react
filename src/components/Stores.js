import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { MyContext } from '../context/MyContext';

const useRepoHook = (myRepo) => {

    const [state, setState] = useState(myRepo.storeState)

    useEffect(() => {
        let suscription = myRepo.onChangeStores.subscribe(newState => {            
            setState(newState)
        })
        myRepo.storeList()
        return () => {
            if (suscription != null)
                suscription.unsubscribe()
        }
    }, [myRepo])
    return [state, setState]
}

const Stores = (props) => {

    const { myRepo } = useContext(MyContext)
    const [ state, setState ] = useRepoHook(myRepo)
    
    const onPageChange = (page) => {   
        if (page >= 0) {
            myRepo.storeState.page = page
            setState({ ...state, page: page })
            myRepo.storeList()
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
        return (
            <div className="container">
                <h3 className="mytitle">Stores</h3>  
                <section className="pagination">
                    <span className="btn" onClick={() => onPageChange(state.page - 1)}>&nbsp;&lt;&nbsp;</span>
                    <input className="input" type="number" min="0" value={state.page + 1} readOnly />
                    <span className="btn" onClick={() => onPageChange(state.page + 1)}>&nbsp;&gt;&nbsp;</span>
                </section>
                <Link className="btn btn-primary create" to="store/new">New</Link>    
                <Table responsive hover size="sm">
                    <thead>
                        <tr>                           
                            <th>Name</th>                                               
                            <th>Email</th>
                            <th>City</th>
                            <th>Edit</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.stores.map(x =>
                                <tr key={x.id}>                                   
                                    <td>{x.name}</td>         
                                    <td className="wwrap">{x.email}</td>
                                    <td>{x.city}</td>
                                    <td><Link className="btn btn-primary" to={`store/${x.id}`}>Edit</Link></td>                                    
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Stores
