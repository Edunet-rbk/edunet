import React from 'react';


export default class FeatureTeachers extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            teachers:[]
        };
        this.fetchTeachers()
    }

    fetchTeachers(){
        fetch('http://localhost:8080/teachers', {
            method : 'GET'
        })
            .then(res =>{
                return res.text()
            })
            .then(data =>{

            this.setState({
                teachers : JSON.parse(data).slice(0,3).map((element, idx)=>{
                    const {id, first_name, last_name, photo, linkedIn} = element;
                    return {id, first_name, last_name, photo, linkedIn}
                })
            })
        })
    };

    render(){
        return(
            <div className="featureTeachers">
                <div className='row'>
<<<<<<< HEAD
                    <div className='col-md-3 offset-md-1'>
                        <div className='card'>
                            <img src='https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png' className='card-img-top'></img>
                            <div className='card-body'>
                                <div className='card-text'>
                                    Text goes here
                                </div>
                                <a href="#" className="card-link">Teacher link</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 offset-md-1'>
                        <div className='card'>
                            <img src='https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png' className='card-img-top'></img>
                            <div className='card-body'>
                                <div className='card-text'>
                                    Text goes here
                                </div>
                                <a href="#" class="card-link">Teacher link</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 offset-md-1'>
                        <div className='card'>
                            <img src='https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png' className='card-img-top'></img>
                            <div className='card-body'>
                                <div className='card-text'>
                                    Text goes here
                                </div>
                                <a href="#" class="card-link">Teacher link</a>
                            </div>
                        </div>
                    </div>
=======
                    {this.state.teachers.map((element, idx)=>{
                        return(
                            <div className='col-md-3 ml-5'>
                                <div className='card'>
                                    <img src={element.photo || 'https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png'} className='card-img-top'></img>
                                    <div className='card-body'>
                                        <div className='card-text'>
                                            {element.post + ', '+element.university}
                                        </div>
                                        <Link to={`/teacher/${element.id}`}><a href="" className="card-link">{element.first_name + ' '+ element.last_name}</a></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

>>>>>>> ddbb9482c2816697b4930f9c8f628390da797d81
                </div>
            </div>
        );
    }
}