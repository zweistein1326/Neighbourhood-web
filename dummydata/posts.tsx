export interface Post {
    header: PostHeader,
    info: PostInfo,
    stats: PostStats,
    categories: string[];
}

export interface PostHeader {
    sender_id: string,
    timestamp: number,
}


export interface PostInfo {
    title: string,
    text: string,
    assets: object[],
}


export interface PostStats {
    likes: number,
    comments: number,
}

export const posts: Post[] = [
    {
        header: {
            sender_id: '1',
            timestamp: 1674650553000,
        },
        info: {
            title:'Do you know anyone who might need our help in becoming job ready?',
            text: 'Do you know anyone who might need our help in becoming job ready? #sharepost within your network. BOOKS FOR ALL TRUST helps 12th pass #students from #marginalized #communities of Delhi Ncr to become JOB READY. To know more about the courses follow our next post or contact us on the provided numbers between 9 am to 5 pm.',
            assets: [{uri:"/images/posts/post-1.jpeg"}, {uri: "https://github.com/zweistein1326/FindNFund/blob/main/public/images/africa_children_2.png?raw=true"}],
        },
        stats: {
            likes: 0,
            comments: 0,
        },
        categories:['Education', 'Poverty']
    },
    {
        header: {
            sender_id: '1',
            timestamp: 1674650553000,
        },
        info: {
            title:'Do you know anyone who might need our help in becoming job ready?',
            text: '"Little girls with dreams, become women with vision". We at our Library cum Creativity Centers help them dream so that they become the visionaries of a better world.',
            assets: [{uri:"/images/posts/post-2.png"}],
        },
        stats: {
            likes: 0,
            comments: 0,
        },
        categories:['Education', 'Poverty']
    },
    {
        header: {
            sender_id: '1',
            timestamp: 1674650553000,
        },
        info: {
            title:'Do you know anyone who might need our help in becoming job ready?',
            text: 'Happy International Day of the Girl Child. Meet the bubbliest Mascot of BFA, Mala. We met her a few years ago, she was hardly 9-year-old then but her smile reminds us everyday how important the change is for which we are working. Please help us in supporting the education of a #girlchild and making her self-dependent. Support our cause: https://lnkd.in/eJpk9V3X',
            assets: [{uri:"/images/posts/post-3.jpeg"}],
        },
        stats: {
            likes: 0,
            comments: 0,
        },
        categories:['Animal Welfare', 'Poverty']
    },
    {
        header: {
            sender_id: '2',
            timestamp: 1674650553000,
        },
        info: {
            title:'Do you know anyone who might need our help in becoming job ready?',
            text: 'We are raising funds for sponsoring 3 bright students who have showed high caliber in the fields of science and technology.',
            assets: [{uri:"https://github.com/zweistein1326/FindNFund/blob/main/public/images/africa_children.png?raw=true"}, {uri: "https://github.com/zweistein1326/FindNFund/blob/main/public/images/africa_children_2.png?raw=true"}],
        },
        stats: {
            likes: 90,
            comments: 202,
        },
        categories:['Environment', 'Sustainability']
    },
    {
        header: {
            sender_id: '2',
            timestamp: 1674650553000
        },
        info: {
            title:'Do you know anyone who might need our help in becoming job ready?',
            text: 'At our Library cum Creativity Centres children get a space to indulge themselves in beautifully illustrated story books  ',
            assets: [{uri: "https://github.com/zweistein1326/FindNFund/blob/main/public/images/africa_children_2.png?raw=true"}],
        },
        stats: {
            likes: 90,
            comments: 202,
        },
        categories:['Education', 'Waste Management']
    },
];