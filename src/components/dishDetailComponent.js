import React, { Component } from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';


class Dishdetail extends Component{


        renderDish(dish){
            if(dish != null){

                 
                return (
                    <div className="col-12 col-md-5 m-1"> 
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    
                );
            }
            else{
                return (
                    <div></div>
                );
            }
        }

        renderComments(dish){
            if(dish != null){
                const comment = dish.comments;
              
               const comments = comment.map((comment)=>{
                   return (
                       
                    <p>
                        <h6>{comment.comment}</h6>
                        <small>-- {comment.author}, {comment.date}</small>
                  </p>
                   );
               });
               return comments;
            }
            else{
                return(
                    <div></div>
                );
            }
        }

    render(){
       
        
        return (
           
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                    <div className="col-12 col-md-5 m-1">
                        
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
            
        );
    }


}


export default Dishdetail;