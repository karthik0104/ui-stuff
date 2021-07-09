import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function MenuTest() {
	const styleN = {'width':'5%', 'height':'110%', 'background-color':'#1c1427', 'margin-top':'0px'};
        return (
            <SideNav style={styleN}
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home" style={{'margin-bottom':'30px'}}>
            <NavIcon style={{'height':'50px', 'margin-right':'10px'}}>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText style={{'margin-left':'50px'}}>
                <a href="/ms/landing-page">Home</a>
            </NavText>
        </NavItem>
        <NavItem eventKey="manual" style={{'margin-bottom':'30px'}}>
            <NavIcon style={{'height':'50px', 'margin-right':'10px'}}>
                <img src={require('../assets/images/nav_form.png')} alt="bg" style={{'width':'30px', 'height':'30px'}}/>
            </NavIcon>
            <NavText>
                My Applications
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    Line Chart
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Bar Chart
                </NavText>
            </NavItem>
        </NavItem>
		<NavItem eventKey="runs" style={{'margin-bottom':'30px'}}>
            <NavIcon style={{'height':'50px', 'margin-right':'10px'}}>
                <img src={require('../assets/images/nav_doc.png')} alt="bg" style={{'width':'30px', 'height':'30px', 'color':'white'}}/>
            </NavIcon>
            <NavText>
                <a href="/ms/my-documents">My Documents</a>
            </NavText>
        </NavItem>
		<NavItem eventKey="help" style={{'margin-bottom':'30px'}}>
            <NavIcon style={{'height':'50px', 'margin-right':'10px'}}>
                <img src={require('../assets/images/nav_friend.png')} alt="bg" style={{'width':'30px', 'height':'30px', 'color':'white'}}/>
            </NavIcon>
            <NavText>
                Refer A Friend
            </NavText>
        </NavItem>
		<NavItem eventKey="help" style={{'margin-bottom':'30px'}}>
            <NavIcon style={{'height':'50px', 'margin-right':'10px'}}>
                <img src={require('../assets/images/nav_help.png')} alt="bg" style={{'width':'30px', 'height':'30px', 'color':'white'}}/>
            </NavIcon>
            <NavText>
                Help
            </NavText>
        </NavItem>
		<NavItem eventKey="logout" style={{'margin-bottom':'30px'}}>
            <NavIcon style={{'height':'50px', 'margin-right':'10px'}}>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Log Out
            </NavText>
        </NavItem>
		
    </SideNav.Nav>
</SideNav>
)};

export default MenuTest;