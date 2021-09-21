import PricingItem from "./PricingItem";
import {Button} from "react-bootstrap";

import classes from './Pricing.module.css';
import {useState} from "react";

function Pricing(props) {
    // 'Monthly' by default
    const [isMonthly, setIsMonthly] = useState(true);

    const setIsMonthlyHandler = () => {
        setIsMonthly(!isMonthly);
    }

    return (
        <div className={classes.pricing}>
            <h2 className={classes.pricing__title}>Base plans</h2>
            <div className={classes.pricing__options}>
                <Button variant="link" className={`${isMonthly ? classes.currentOption : classes.underlinedNotSelected}`} onClick={setIsMonthlyHandler}>Monthly</Button>
                <p>/</p>
                <Button variant="link" className={`${isMonthly ? classes.underlinedNotSelected : classes.currentOption}`} onClick={setIsMonthlyHandler}>Yearly</Button>
            </div>
            <div className={classes.pricingElements}>
                <PricingItem
                    id={props.data[0].id}
                    title={props.data[0].title}
                    description={props.data[0].description}
                    price={props.data[0].price}
                    isMonthly={isMonthly}
                    offered={props.data[0].offered}
                />
                <PricingItem
                    id={props.data[1].id}
                    title={props.data[1].title}
                    description={props.data[1].description}
                    price={props.data[1].price}
                    isMonthly={isMonthly}
                    offered={props.data[1].offered}
                    highlighted
                />
                <PricingItem
                    id={props.data[2].id}
                    title={props.data[2].title}
                    description={props.data[2].description}
                    price={props.data[2].price}
                    isMonthly={isMonthly}
                    offered={props.data[2].offered}
                />
            </div>
        </div>
    );
}

export default Pricing;
