import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';

import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Chip from 'material-ui/Chip';
import {blue300} from 'material-ui/styles/colors';

import EditIcon from 'material-ui/svg-icons/image/edit'
import HistoryIcon from 'material-ui/svg-icons/action/history'
import BalanceLeaves from 'material-ui/svg-icons/action/check-circle'
import ApplyIcon from 'material-ui/svg-icons/action/pan-tool'
import ApproveIcon from 'material-ui/svg-icons/action/done-all'

class Navigation extends Component {
  constructor(props){
    super(props);
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  onMenuClick(event,menuItem,index){
    console.log('clicked ',index);
    this.props.callParent(index)
  }

  render() {
    const style = {
      paper: {
        display: 'inline-block',
        float: 'left',
        margin: '16px 32px 16px 0',
      },
      avtarMargin :{
        position : 'inherit',
        left : 0,
      },
      chip: {
        margin: 10,
        left : 10,
      },
    };

    return (
      <Paper style={style.paper} zDepth={5}>
        <ListItem
            leftAvatar={<Avatar src="images/brad.jpeg" size={70} style={style.avtarMargin}/>}
        />
        <Divider />
        <Chip style={style.chip} backgroundColor={blue300}>
          Prof.Harshal Gaydhankar
        </Chip>
        <Divider />
        <Menu onItemClick={this.onMenuClick} selectedIndex={5}>
          <MenuItem primaryText="Apply for Leave" leftIcon={<ApplyIcon />} />
          <MenuItem primaryText="Leave Status" leftIcon={<RemoveRedEye />} />
          <MenuItem primaryText="Approve Leave" leftIcon={<ApproveIcon />} />
          <Divider />
          <MenuItem primaryText="Check Balance" leftIcon={<BalanceLeaves />} />
          <MenuItem primaryText="Leave History" leftIcon={<HistoryIcon />} />
          <Divider />
          <MenuItem primaryText="Edit Profile" leftIcon={<EditIcon />} />
        </Menu>
      </Paper>
    );
  }
}
export default Navigation;
