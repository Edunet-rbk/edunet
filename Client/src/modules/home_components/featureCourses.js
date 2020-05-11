import React from 'react';
import {Link} from 'react-router-dom';


export default class FeatureCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            courses : []
        };
        this.fetchCourses()
    }

    fetchCourses(){
        fetch('http://localhost:8080/courses', {
            method : 'GET'
        })
            .then(res =>{
                return res.text()
            })
            .then(data =>{
            this.setState({
                courses : JSON.parse(data).map((element, idx)=>{
                    const {id, title, description, photo} = element;
                    return {id, title, description, photo}
                })
            })

        })
    };

    render(){
        return(
            <div className='featureCourses mb-5'>
                <h1 className='content'>Courses</h1>
                <div className="row">
                    {this.state.courses.slice(0,3).map((element, idx)=>{
                        return(
                            <div className="col-md-3 ml-5" key={idx}>
                                <Link to={`/course/${element.id}`}>
                                    <div className="card ">
                                        <img className ="card-img-top" src={element.photo}></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{element.title}</h5>
                                            <p className="card-text">{element.description.substring(0,100)}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}