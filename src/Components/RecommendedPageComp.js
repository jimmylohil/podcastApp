import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import DownListComp from './DownList/DownListComp';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper>
        <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
          <Tab label="Show" />
          <Tab label="Episode" />
        </Tabs>
      {value === 0 && <TabContainer><DownListComp type="DownListUITypeShow"/></TabContainer>}
      {value === 1 && <TabContainer><DownListComp type="DownListUITypeEpisode"/></TabContainer>}
    </Paper>
  );
}
