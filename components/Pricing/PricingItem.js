import Card from '../ui/Card';
import classes from './PricingItem.module.css';
import React, {useState} from "react";
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap';

function PricingItem(props) {
    function selectPlanButtonHandler(event, title) {
        event.preventDefault();
        alert("Selected '" + title + "' plan");
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            More information about this service
        </Tooltip>
    );

    return (
        <Card className={props.highlighted ? classes.cardPricingItemHighlighted : classes.cardPricingItem}>
            <h3 className={classes.cardPricingItem__title}>{props.title}</h3>
            <p className={classes.cardPricingItem__description}>{props.description}</p>
            <div className={classes.cardPricingItem__Price}>
                <h2>{`${props.isMonthly ? props.price.monthly : props.price.yearly}`}€</h2>
                <h2>/</h2>
                <div className={classes.monthlyYearly}>
                    {props.isMonthly && <p>per month</p>}
                    {!props.isMonthly && <p>per year</p>}
                    <p>per employee</p>
                </div>
            </div>
            <hr className={classes.slash}/>
            <div className={classes.offeredDiv}>
                {props.title === 'Essential' && (
                    props.offered.map((offer) => (
                        <div key={offer} className={classes.offeredDiv__list1}>
                            <li className={classes.darkBlueSymbol}>&#10003;</li>
                            <li>{offer}</li>
                        </div>
                    ))
                )}
                {props.title !== 'Essential' && (
                    props.offered.map((offer) => (
                        <div key={offer} className={classes.offeredDiv__list2}>
                            {offer === '+' && <li className={classes.graySymbol}>{offer}</li>}
                            {offer !== '+' && <li>{offer}</li>}
                            {offer !== '+' && (
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{show: 250, hide: 400}}
                                    overlay={renderTooltip}
                                >
                                    <li className={classes.graySymbolPointer}>&#9432;</li>
                                </OverlayTrigger>
                            )
                            }
                        </div>
                    ))
                )}
            </div>
            <Button
                className={classes.selectPlanButton}
                variant="primary"
                onClick={(event) => selectPlanButtonHandler(event, props.title)}
            >Select Plan</Button>{' '}
        </Card>
    );
}

export default PricingItem;
