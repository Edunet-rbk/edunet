import React from 'react';
<<<<<<< HEAD


export default class FeatureCategory extends React.Component {
    

=======
import {Link} from 'react-router-dom';
export default class FeatureCategory extends React.Component {
    constructor(props){
        super(props);
        this.state={
            categories : []
        };
        this.fetchCategories();
    }

    fetchCategories(){
        fetch('http://localhost:8080/category', {
            method : 'GET'
        })
            .then(res =>{
                return res.text()
            })
            .then(data =>{
            this.setState({
                categories : JSON.parse(data).map((element, idx) =>{
                    return element.name;
                })
            })

        })
    }
>>>>>>> ddbb9482c2816697b4930f9c8f628390da797d81

    render(){
        return(
        <div className="featureCategory">
            <div className='row'>
<<<<<<< HEAD
                <div className='col-md-2 categoryBorder'>
                    <h2> Category goes here</h2>
                </div>
                <div className='col-md-2 categoryBorder'>
                    <h2> Category goes here</h2>
                </div>
                <div className='col-md-2 categoryBorder'>
                    <h2> Category goes here</h2>
                </div>
                <div className='col-md-2 categoryBorder'>
                    <h2> Category goes here</h2>
                </div>
                <div className='col-md-2 categoryBorder'>
                    <h2> Category goes here</h2>
                </div>
=======
                {this.state.categories.map((element,idx) =>{
                    return(
                        <div className='col-md-2 categoryBorder'>
                            <Link to='searchbycategory/marketing'><h2>{element}</h2></Link>
                        </div>
                    )
                })
                }
>>>>>>> ddbb9482c2816697b4930f9c8f628390da797d81
            </div>
        </div>
        );
    }
}