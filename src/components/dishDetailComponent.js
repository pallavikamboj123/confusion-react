import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';



        function RenderDish( { dish } ){
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
                console.log("inside else");
                return (
                    <div></div>
                );
            }
        }

        function RenderComments({ dish } ){
            if(dish != null){
                const comment = dish.comments;
                // console.log("dish is ", dish.name);
              var options = {year: 'numeric' , month: 'short', day:'2-digit'};
               const comments = comment.map((comment)=>{
                  // const date = comment.date;
                   return (
                       
                    <p>
                        <h6>{comment.comment}</h6>
                        <small>-- {comment.author}, {new Intl.DateTimeFormat('en-US',options).format(new Date(Date.parse(comment.date)))}</small>
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

    
       const DishDetail = (props)=>{
        return (
            <div className="container">
                <div className="row">
                   
                        <RenderDish dish = {props.selectedDish} />
                   
                    
                    <div className="col-12 col-md-5 m-1">
                        
                        <RenderComments dish = {props.selectedDish}  />
                    </div>
                </div>
            </div>
            
        );
    }





export default DishDetail;