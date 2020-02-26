import React, {Component} from "react";

class MobileMenu extends Component {
    state = {
        open: true
    };

    handleOpenMenu = (e) => {
        e.preventDefault();
        this.setState({
            open: true
        })
    };

    handleCloseMenu = (e) => {
        e.preventDefault();
        this.setState({
            open: false
        })
    };

    render() {
        const {open} = this.state;
        let navClass = open ? null : 'hide';
        return (
            <section className='mobile'>
                <header className='mobile-menu'>
                    <a href='#' className='open-menu' onClick={this.handleOpenMenu}></a>
                    <nav className={navClass}>
                    <ul>
                        <li><a href='#'>O nas</a></li>
                        <li><a href='#'>Zespół</a></li>
                        <li><a href='#'>Produkty</a></li>
                        <li><a href='#'>Kontakt</a></li>
                    </ul>
                        <a href='#' className='close-menu' onClick={this.handleCloseMenu}>Zamknij menu</a>
                    </nav>
                </header>
            </section>
        );
    }
}

function Task11() {
    return <MobileMenu/>
}

export default Task11;