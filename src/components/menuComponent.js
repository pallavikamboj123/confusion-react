import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link } from 'react-router-dom';  






// whether we can write props or we can specify name of each
    //item bc props is js object
    function RenderMenuItem({ dish}){
        return (
            <Card >
                <Link to = {`/menu/${dish.id}`}>
                <CardImg width= "100%" object src={dish.image} alt = {dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const Menu = (props)=>{
        const menu = props.dishes.map((dish)=>{
            return (
//whenever we are rendering a list of items in react, we need to give an id to each object so that react will be able to recognise each element uniquely
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish = {dish} />
                </div>
            );
        });
      
        return (
            
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                   
                </div>
                {/* {this.renderDish(this.state.selectedDish)} */}
                
            </div>
        );
    }
   

        

export default Menu;