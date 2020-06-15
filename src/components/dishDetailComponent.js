import React, {Component} from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button,
    Modal, ModalHeader,ModalBody, Label, Row} from 'reactstrap';
import {Control, LocalForm,Errors} from 'react-redux-form';
import {Link} from 'react-router-dom';

const required = (val)=> val && val.length;
const maxLength = (len) => (val)=> !(val) || val.length <= len;
const minLength = (len) => (val) => (val) && val.length >= len;


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
        class CommentForm extends Component {
            constructor(props){
                super(props);
                this.state = {
                    isModalOpen : false
                };
                this.toggleModal = this.toggleModal.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
            }

            toggleModal(){
                this.setState({
                    isModalOpen: !this.state.isModalOpen
                });
            }

            handleSubmit(values) {
                this.toggleModal();
                this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        //         console.log("current state: "+ JSON.stringify(values));
        // alert("current state is: "+ JSON.stringify(values));
            }
            
            render(){
                return (
                    <div>
                        <Button outline onClick={this.toggleModal}><span class="fa fa-pencil fa-lg">Submit Comment</span></Button>
                    <Modal isOpen = {this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit= {(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" >Rating</Label>
                                {/* <col md={5}> */}
                                <Control.select   model=".rating" id="rating"
                                     name="rating"
                                     className="form-control"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </Control.select>
                                {/* </col> */}
                                
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author">Author Name</Label>
                                <Control.text model= ".author" id="author" name="author"
                                    placeholder="your name" 
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages = {{
                                        required: 'Required Field',
                                        minLength: 'Must be greater than 2',
                                        maxLength: 'Must be atmost 15'
                                    }}
                                />
                                    
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment" 
                                    row="6"
                                    className="form-control"
                                />
                                    
                            </Row>
                            <Button type="submit" color="primary" name="submit">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                    </div>
                    

                );
            }
            }
        
        function RenderComments({ comment, addComment, dishId} ){
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
                        <CommentForm dishId = {dishId} addComment = {addComment}/>
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
                   <RenderComments comment = {props.comments} 
                    addComment = {props.addComment}
                    dishId = {props.dish.id}
                   />
                   
                </div>
               

            </div>

            
        );
    }





export default DishDetail;