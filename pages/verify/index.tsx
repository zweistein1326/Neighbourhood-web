import { VerifiedUser } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Header from "../../components/header";

const VerificationPage = () => {
    const plans = [
        {
            id: '1',
            title: '1 year subscription',
            price:'HK$180',
            discounted_price:'HK$36'
        },
        {
            id: '2',
            title: '6 month subscription',
            price:'HK$220',
            discounted_price:'HK$44'
        },
        {
            id: '3',
            title: '1 month subscription',
            price:'HK$250',
            discounted_price:'HK$50'
        }
    ]
    return (
        <div style={{paddingTop:'8vh', width:'100vw'}}>
            <Header />
            <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px 15vw', position:'relative', zIndex:0}}>
                <div style={{display:'flex', flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between', width:'100%'}}>
                    <div style={{ width: '100%' }}>
                        <VerifiedUser style={{fontSize:140, position:'absolute', top:'60px', right:'15vw'}} color='primary'/>
                        <div style={{marginTop:'40px'}}>
                            <Typography style={{ fontSize: 32, fontWeight: 700 }}>Benefits of becoming verified</Typography>
                            <div>
                                <ul>
                                    <li><Typography style={{fontSize:20, fontWeight:500, marginBottom:12}}>Apply for grants from any part of the world.</Typography></li>
                                    <li><Typography style={{fontSize:20, fontWeight:500, marginBottom:12}}>Create fundraisers to raise funds for your social good organization</Typography></li>
                                    <li><Typography style={{fontSize:20, fontWeight:500, marginBottom:12}}>Add team members to your {`organization's`} profile page.</Typography></li>
                                    <li><Typography style={{fontSize:20, fontWeight:500, marginBottom:12}}>Send unlimited messages per day</Typography></li>
                                </ul>
                            </div>
                        </div>
                        <div style={{marginTop:'40px'}}>
                            <Typography style={{ fontSize: 32, fontWeight: 700 }}>How to get verified?</Typography>
                            <div>
                                <ul>
                                    <li><Typography style={{fontSize:20, fontWeight:500, marginBottom:12}}>Sumbit your documents. <span style={{color:'#0066FF'}}>View list of documents</span></Typography></li>
                                    <li><Typography style={{fontSize:20, fontWeight:500, marginBottom:12}}>Wait 6-12 hours for verification confirmation.</Typography></li>
                                </ul>
                            </div>
                        </div>
                        <div style={{marginTop:'40px', width:'100%'}}>
                            <Typography style={{ fontSize: 32, fontWeight: 700 }}>Verification Subscription Plans</Typography>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width:'100%', padding:'40px 0'}}>
                                {plans.map((plan, index) => <PricingPlan plan={plan} key={index}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const PricingPlan = ({plan}: any) => {
    return (
        <div style={{boxShadow:'0px 0px 4px 4px rgba(0,0,0,0.1)', padding:'20px', borderRadius:8, display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Typography style={{ fontSize: 20, fontWeight:600}}>{plan.title}</Typography>
            <ul>
                <li><Typography style={{fontSize:16, fontWeight:500, marginBottom:12}}>Unlimited grant applications.</Typography></li>
                <li><Typography style={{fontSize:16, fontWeight:500, marginBottom:12}}>Unlimited fundraising posts.</Typography></li>
                <li><Typography style={{fontSize:16, fontWeight:500, marginBottom:12}}>Add team members to profile.</Typography></li>
                <li><Typography style={{fontSize:16, fontWeight:500, marginBottom:12}}>No limit on messages/day</Typography></li>
            </ul>
            <Typography style={{fontSize:22, textDecoration:'line-through'}}>{plan.price}</Typography>
            <Typography style={{fontSize:22}}><span style={{fontSize:16}}>Early signup price:</span> {plan.discounted_price}</Typography>
            <Button>Subscribe</Button>
        </div>
    )
}

export default VerificationPage;