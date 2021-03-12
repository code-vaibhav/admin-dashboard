import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Budget from './Budget';
import LatestOrders from './LatestOrders';
import LatestProducts from './LatestProducts';
import Sales from './Sales';
import TasksProgress from './TasksProgress';
import TotalCustomers from './TotalCustomers';
import TotalProfit from './TotalProfit';
import TrafficByDevice from './TrafficByDevice';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const latestOrders = ['Order Ref', 'Account Name', 'Total', 'PickUp Date', 'Status']
  const readyForPickup = ['Order Ref', 'Account Name', 'Total', 'PickUp Date']
  const readyForDispatch = ['Order Ref', 'Account Name', 'Total', 'Pickup Date', 'Truck No.']
  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid item lg={12} md={12} xl={9} xs={12}>
            <LatestOrders header={latestOrders}/>
        </Grid>
        <br/>
        <Grid container spacing={2}>
          <Grid item lg={6} md={12} xl={9} xs={12}>
            <LatestOrders header={readyForPickup}/>
          </Grid>
          <Grid item lg={6} md={12} xl={9} xs={12}>
            <LatestOrders header={readyForDispatch}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
