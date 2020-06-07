import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';


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
                
                return (
                    <div></div>
                );
            }
        }

        function RenderComments({ comment} ){
            console.log("comments are ",comment);
            if(comment!= null){
                               
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
               return (
                   <div className="col-12 col-md-5 m-1">
                       <h3>Comments</h3>
                        {comments}
                   </div>
               );
            }
            else{
                console.log("no comments");
                return(
                    <div></div>
                );
            }
        }

    
       const DishDetail = (props)=>{
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                   <RenderDish dish = {props.dish} />
                   <RenderComments comment = {props.comments}  />
                   
                </div>
            </div>
            
        );
    }





export default DishDetail;