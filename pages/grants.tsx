import Feed from '../components/feed';
import CreatePost from '../components/feed/createPost';
import Container from '../components/container';
import GrantList from '../components/grants/list';
import GrantInfo from '../components/grants/info';
import { useState } from 'react';
import GrantFilters from '../components/grants/filters';

// TODO: Add filter by location and industry filters

const FeedPage = () => {
    const grants = [
        {
            id:'1',
            title: 'ALDI - New frontier grant',
            organization: 'ALDI',
            range: 'USD100-500',
            created: '2d ago',
            organizationAbout: 'Aldi is passionate about making a positive impact in their local communities. So whether your mission is to support kids through education, arts, athletics or any other program that inspires them to be active and healthy, ALDI says kudos to you and encourages you to apply for support from the ALDI Smart Kids program.',
            eligible: [
                'Aldi is passionate about making a positive impact in their local',
                'communities. So whether your mission is to support kids through ',
                'education, arts, athletics or any other program that inspires them to be ',
                'active and healthy, ALDI says kudos to you and encourages you to apply ',
                'for support from the ALDI Smart Kids program.',
                ]
        },
        {
            id:'2',
            title: 'Barney Family Foundation Grant',
            organization: 'Barney Family Foundation',
            range: 'USD500-50000',
            created:'3d ago',
            organizationAbout: 'Aldi is passionate about making a positive impact in their local communities. So whether your mission is to support kids through education, arts, athletics or any other program that inspires them to be active and healthy, ALDI says kudos to you and encourages you to apply for support from the ALDI Smart Kids program.',
            eligible: [
                'Aldi is passionate about making a positive impact in their local',
                'communities. So whether your mission is to support kids through ',
                'education, arts, athletics or any other program that inspires them to be ',
                'active and healthy, ALDI says kudos to you and encourages you to apply ',
                'for support from the ALDI Smart Kids program.',
                ]
        },
        {
            id:'3',
            title: 'ALDI - New frontier grant',
            organization: 'ALDI',
            range: 'USD100-500',
            created:'4d ago',
            organizationAbout: 'Aldi is passionate about making a positive impact in their local communities. So whether your mission is to support kids through education, arts, athletics or any other program that inspires them to be active and healthy, ALDI says kudos to you and encourages you to apply for support from the ALDI Smart Kids program.',
            eligible: [
                'Aldi is passionate about making a positive impact in their local',
                'communities. So whether your mission is to support kids through ',
                'education, arts, athletics or any other program that inspires them to be ',
                'active and healthy, ALDI says kudos to you and encourages you to apply ',
                'for support from the ALDI Smart Kids program.',
                ]
        },
    ]
    const [selectedGrant, selectGrant] = useState(grants[0]);
  return (
        <Container rightNav={false}>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingRight: 0 }}>
                    <GrantFilters/>
                <div style={{display:'flex', flexDirection:'row',  borderTop:'0.2px solid rgba(0,0,0,0.05)', height:'100%'}}>
                    <GrantList grants={grants} selectedGrant={selectedGrant} selectGrant={selectGrant} />
                    <GrantInfo selectedGrant={selectedGrant} />
                </div>
            </div>
        </Container>
  )
}
export default FeedPage;
