import Pricing from "../components/Pricing/Pricing";
import {Fragment} from "react";
import Head from "next/head";

import classes from '../styles/Home.module.css'

const BASE_PLANS = [
    {
        id: 'p1',
        title: 'Essential',
        description: 'Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives.',
        price: {
            monthly: 8,
            yearly: 96
        },
        offered: ['Core HR', 'Payroll', 'Recruiting', 'Employee HUB']
    },
    {
        id: 'p2',
        title: 'Growth',
        description: 'Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives.',
        price: {
            monthly: 14,
            yearly: 168
        },
        offered: ['Core HR', 'Payroll', 'Recruiting', 'Employee HUB', '+', 'Performance management', 'Shift planning']
    },
    {
        id: 'p3',
        title: 'Performance',
        description: 'Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives.',
        price: {
            monthly: 20,
            yearly: 240
        },
        offered: ['Core HR', 'Payroll', 'Recruiting', 'Employee HUB', '+', 'Performance management', 'Shift planning', 'Compensation management']
    }
];

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Code assignment - Pricing Component in NextJS</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap"
                    rel="stylesheet"/>
            </Head>
            <Pricing data={BASE_PLANS}/>

        </Fragment>
    )
}
