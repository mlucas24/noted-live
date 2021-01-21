import React from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { Link} from "react-router-dom";
const Header = () => {
    return (
        <div>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                <Link to="/" >
                    <Typography color="secondary" edge="start"><h5>Matt Lucas Codes</h5></Typography>
                        </Link>
                    <Link to="/csharp" >
                        <Button color="secondary">
                            C# Projects
                        </Button>
                    </Link>
                    <Link to="/javascript" >
                        <Button color="secondary">
                            JavaScript Projects
                        </Button>
                    </Link>
                    <Link to="/resume" >
                        <Button color="secondary">
                            Resume
                        </Button>
                    </Link>
                    <Link to="/contact" >
                        <Button color="secondary">
                            Contact
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>

            
        </div>
    )
}

export default Header;