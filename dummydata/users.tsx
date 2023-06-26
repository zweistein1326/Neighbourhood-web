export const users = [
    {   
        // How to choose between '' and ""
        user_id: "1",
        name: "Books for all",
        username: "BFA.inc",
        followers:'20K',
        email: "bfa@bfa.inc",
        about:'Books for All is registered as a Public Charitable Trust on 10th February 2011 in New Delhi. It was on 30th January 2010 that Books For All started its first Library in Govt Primary School Village Gejha in Noida and gradually evolved into an NGO impacting the life of lesser privileged students through its libraries, sponsorship of bright deserving students to better schools & providing Career Counselling & Vocational Training to class 12 pass students from Hindi Medium Schools. As of now, 6 libraries are operational and successfully running in the schools of Noida. These Libraries cum creativity centres ...',
        password: "BFA",
        verified: true,
        following: true,
        type: 1,
        profile_image_url:"/images/profile_image/ngo1.png"
        // TYPE 1 = VERIFIED ORGANISATION
    },
    {   
        user_id: "2",
        name: "MIET Africa",
        username: "mietAfrica",
        followers:'12K',
        email: "MIET Africa",
        password: "MIET Africa",
        verified: true,
        following: false,
        type: 1,
        profile_image_url:"/images/profile_image/ngo2.png"
        // TYPE 1 = VERIFIED ORGANISATION
    },
    {   
        user_id: "3",
        name: "Cambodian Children\'s Fund",
        username: "ccf",
        followers:'17K',
        email: "MIET Africa",
        password: "MIET Africa",
        verified: false,
        following: true,
        type: 2,
        profile_image_url:"/images/profile_image/ngo1.png"
        // TYPE 2 = UNVERIFIED ORGANISATION
    }
    
]