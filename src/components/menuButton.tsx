import React from 'react';

interface IMenuButton {
    menuButton: string;
}

class MenuButton extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            menuButton: 'menu-button'
        };
        this.handleMenu = this.handleMenu.bind(this)
    }

    handleMenu() {
        this.setState((prevState:IMenuButton) => {

            if(prevState.menuButton.split(" ").length > 1) {
                prevState.menuButton = 'menu-button'
            } else {
                prevState.menuButton = 'menu-button active'
            }

            return {
                menuButton: prevState.menuButton
            }
        });
    }

    render() {
        return (
            <button className={this.state.menuButton} onClick={this.handleMenu} />
        )
    }
}

export default MenuButton;