import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends Component{
    render(){
        return (
            // <> short form of react fragmet</>
            //allows us to bind multiple react elements together
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">navbarbrand</NavbarBrand>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1> some content</h1>
                                <p>Click the “Save Note” button when you want to capture a screen. You can also highlight and save lines from the transcript below. Add your own notes to anything you’ve captured.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

            </>
        );
    }
}

export default Header;

